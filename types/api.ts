export interface League {
  idLeague: string;
  strLeague: string;
  strSport: string;
  strLeagueAlternate?: string;
}

export interface Season {
  idSeason: string;
  strSeason: string;
  strBadge?: string;
}

export interface ApiResponse<T> {
  leagues?: T[];
  seasons?: T[];
}

export interface LeagueFilters {
  searchQuery: string;
  selectedSport: string;
}

export interface ModalState {
  visible: boolean;
  loading: boolean;
  error: string | null;
}