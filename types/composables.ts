import type { Ref } from 'vue';
import type { League, Season } from './api';

export interface UseApiReturn {
  fetchLeagues: () => Promise<League[]>;
  fetchSeasonBadge: (leagueId: string) => Promise<Season | null>;
  clearCache: () => void;
  getCacheStats: () => { size: number; keys: string[] };
}

export interface UseLeaguesReturn {
  leagues: Readonly<Ref<League[]>>;
  loading: Readonly<Ref<boolean>>;
  error: Readonly<Ref<string | null>>;
  loadLeagues: () => Promise<void>;
}

export interface UseLeagueFiltersReturn {
  searchQuery: Readonly<Ref<string>>;
  selectedSport: Readonly<Ref<string>>;
  allSports: ComputedRef<string[]>;
  filteredLeagues: ComputedRef<League[]>;
  handleSearch: (query: string) => void;
  handleSportFilter: (sport: string) => void;
}

export interface UseSeasonModalReturn {
  modalVisible: Readonly<Ref<boolean>>;
  modalLoading: Readonly<Ref<boolean>>;
  modalError: Readonly<Ref<string | null>>;
  selectedSeason: Readonly<Ref<Season | null>>;
  openModal: (leagueId: string) => Promise<void>;
  closeModal: () => void;
}