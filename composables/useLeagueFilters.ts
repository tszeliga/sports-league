interface League {
  idLeague: string;
  strLeague: string;
  strSport: string;
  strLeagueAlternate?: string;
}

export const useLeagueFilters = (leagues: Ref<League[]>) => {
  const searchQuery = ref('');
  const selectedSport = ref('');

  const allSports = computed(() => {
    return leagues.value.map(league => league.strSport);
  });

  const filteredLeagues = computed(() => {
    let filtered = leagues.value;

    // Filter by search query
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase();
      filtered = filtered.filter(league =>
        league.strLeague.toLowerCase().includes(query) ||
        (league.strLeagueAlternate && league.strLeagueAlternate.toLowerCase().includes(query))
      );
    }

    // Filter by sport
    if (selectedSport.value) {
      filtered = filtered.filter(league => league.strSport === selectedSport.value);
    }

    return filtered;
  });

  const handleSearch = (query: string) => {
    searchQuery.value = query;
  };

  const handleSportFilter = (sport: string) => {
    selectedSport.value = sport;
  };

  return {
    searchQuery: readonly(searchQuery),
    selectedSport: readonly(selectedSport),
    allSports,
    filteredLeagues,
    handleSearch,
    handleSportFilter
  };
};