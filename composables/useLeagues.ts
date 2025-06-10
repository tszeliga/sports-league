import type { League, UseLeaguesReturn } from "~/types";

export const useLeagues = (): UseLeaguesReturn => {
  const { fetchLeagues } = useApi();

  const leagues = ref<League[]>([]);
  const loading = ref(true);
  const error = ref<string | null>(null);

  const loadLeagues = async (): Promise<void> => {
    try {
      loading.value = true;
      error.value = null;
      leagues.value = await fetchLeagues();
    } catch {
      error.value = "Failed to load leagues. Please try again later.";
    } finally {
      loading.value = false;
    }
  };

  return {
    leagues,
    loading: readonly(loading),
    error: readonly(error),
    loadLeagues,
  };
};
