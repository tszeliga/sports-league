import type { League, UseLeagueFiltersReturn } from '~/types';

export const useLeagueFilters = (leagues: Readonly<Ref<League[]>>): UseLeagueFiltersReturn => {
  const searchQuery = ref('');
  const selectedSport = ref('');

  const allSports = computed((): string[] => {
    return leagues.value.map(league => league.strSport);
  });

  const filteredLeagues = computed((): League[] => {
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

  const handleSearch = (query: string): void => {
    searchQuery.value = query;
  };

  const handleSportFilter = (sport: string): void => {
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