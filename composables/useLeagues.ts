interface League {
  idLeague: string;
  strLeague: string;
  strSport: string;
  strLeagueAlternate?: string;
}

export const useLeagues = () => {
  const { fetchLeagues } = useApi();
  
  const leagues = ref<League[]>([]);
  const loading = ref(true);
  const error = ref<string | null>(null);

  const loadLeagues = async () => {
    try {
      loading.value = true;
      error.value = null;
      leagues.value = await fetchLeagues();
    } catch (err) {
      error.value = 'Failed to load leagues. Please try again later.';
      console.error('Error fetching leagues:', err);
    } finally {
      loading.value = false;
    }
  };

  return {
    leagues: readonly(leagues),
    loading: readonly(loading),
    error: readonly(error),
    loadLeagues
  };
};