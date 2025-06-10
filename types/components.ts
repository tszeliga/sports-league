export interface AppHeaderProps {
  totalLeagues?: number;
}

export interface ErrorStateProps {
  message: string;
}

export interface FilterSectionProps {
  sports: string[];
}

export interface FilterSectionEmits {
  search: [query: string];
  'sport-filter': [sport: string];
}

export interface LeagueCardProps {
  league: {
    idLeague: string;
    strLeague: string;
    strSport: string;
    strLeagueAlternate?: string;
  };
}

export interface LeagueCardEmits {
  click: [leagueId: string];
}

export interface LeaguesGridProps {
  leagues: Array<{
    idLeague: string;
    strLeague: string;
    strSport: string;
    strLeagueAlternate?: string;
  }>;
}

export interface LeaguesGridEmits {
  'league-click': [leagueId: string];
}

export interface LoadingStateProps {
  message?: string;
}

export interface NoResultsProps {
  message?: string;
}

export interface SearchBarEmits {
  search: [value: string];
}

export interface SeasonBadgeModalProps {
  isVisible: boolean;
  season: {
    idSeason: string;
    strSeason: string;
    strBadge?: string;
  } | null;
  loading: boolean;
  error: string | null;
}

export interface SeasonBadgeModalEmits {
  close: [];
}

export interface SportFilterProps {
  sports: string[];
}

export interface SportFilterEmits {
  filter: [sport: string];
}