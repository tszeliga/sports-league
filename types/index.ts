// Re-export all types for easy importing
export * from './api';
export * from './components';
export * from './composables';

// Common utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

// Event handler types
export type EventHandler<T = Event> = (event: T) => void;
export type AsyncEventHandler<T = Event> = (event: T) => Promise<void>;

// Generic API response wrapper
export interface ApiError {
  message: string;
  status?: number;
  code?: string;
}

export interface ApiSuccess<T> {
  data: T;
  message?: string;
}

export type ApiResult<T> = ApiSuccess<T> | ApiError;