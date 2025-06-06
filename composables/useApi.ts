interface League {
  idLeague: string;
  strLeague: string;
  strSport: string;
  strLeagueAlternate?: string;
}

interface Season {
  idSeason: string;
  strSeason: string;
  strSeasonBadge?: string;
}

interface ApiResponse<T> {
  leagues?: T[];
  seasons?: T[];
}

const cache = new Map<string, any>();

export const useApi = () => {
  const fetchWithCache = async <T>(url: string): Promise<T> => {
    if (cache.has(url)) {
      return cache.get(url);
    }

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      cache.set(url, data);
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  };

  const fetchLeagues = async (): Promise<League[]> => {
    const data = await fetchWithCache<ApiResponse<League>>('https://www.thesportsdb.com/api/v1/json/3/all_leagues.php');
    return data.leagues || [];
  };

  const fetchSeasonBadge = async (leagueId: string): Promise<Season | null> => {
    const data = await fetchWithCache<ApiResponse<Season>>(`https://www.thesportsdb.com/api/v1/json/3/search_all_seasons.php?badge=1&id=${leagueId}`);
    const seasons = data.seasons || [];
    return seasons.find(season => season.strSeasonBadge) || seasons[0] || null;
  };

  return {
    fetchLeagues,
    fetchSeasonBadge
  };
};