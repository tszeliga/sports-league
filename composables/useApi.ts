import { LRUCache } from "lru-cache";
import type { League, Season, ApiResponse, UseApiReturn } from "~/types";

const BASE_URL = "https://www.thesportsdb.com/api/v1/json/3";

// Simple fetch with timeout
async function fetchData<T>(url: string): Promise<T> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        Accept: "application/json",
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    clearTimeout(timeoutId);

    if (error instanceof Error) {
      if (error.name === "AbortError") {
        throw new Error("Request timeout");
      }
      if (error.name === "TypeError") {
        throw new Error("Network error");
      }
    }
    throw error;
  }
}

export const useApi = (): UseApiReturn => {
  // The cache is now generic and scoped to this instance
  const cache = new LRUCache<string, ApiResponse<League> | ApiResponse<Season>>(
    {
      max: 100,
      ttl: 10 * 60 * 1000,
    }
  );

  async function fetchWithCache<T>(endpoint: string): Promise<T> {
    const cacheKey = endpoint;

    if (cache.has(cacheKey)) {
      return cache.get(cacheKey) as T;
    }

    const url = `${BASE_URL}/${endpoint}`;
    const data = await fetchData<T>(url);

    cache.set(cacheKey, data as ApiResponse<League> | ApiResponse<Season>);

    return data;
  }

  const fetchLeagues = async (): Promise<League[]> => {
    try {
      const data = await fetchWithCache<ApiResponse<League>>("all_leagues.php");
      const leagues = data.leagues || [];
      return leagues.filter(
        (league) => league?.idLeague && league?.strLeague && league?.strSport
      );
    } catch (error) {
      throw new Error("Failed to fetch leagues", { cause: error });
    }
  };

  const fetchSeasonBadge = async (leagueId: string): Promise<Season | null> => {
    if (!leagueId) {
      throw new Error("League ID is required");
    }

    try {
      const endpoint = `search_all_seasons.php?badge=1&id=${encodeURIComponent(
        leagueId
      )}`;
      const data = await fetchWithCache<ApiResponse<Season>>(endpoint);

      const seasons = data.seasons || [];

      if (seasons.length === 0) {
        return null;
      }

      const seasonWithBadge = seasons.find(
        (season) => season?.strBadge && season.strBadge !== "null"
      );

      return seasonWithBadge || seasons[0] || null;
    } catch (error) {
      throw new Error("Failed to fetch season badge", { cause: error });
    }
  };

  const clearCache = (): void => {
    cache.clear();
  };

  const getCacheStats = () => {
    return {
      size: cache.size,
      keys: Array.from(cache.keys()),
    };
  };

  return {
    fetchLeagues,
    fetchSeasonBadge,
    clearCache,
    getCacheStats,
  };
};
