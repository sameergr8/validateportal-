// Shared API contract types. These mirror what the Laravel backend will return
// once it ships. Mock implementations in lib/mocks.ts must conform to these.

export interface ApiResponse<T> {
  data: T;
  message?: string;
}

export interface ApiError {
  status: number;
  code: string;
  message: string;
  fields?: Record<string, string[]>;
}

export interface Paginated<T> {
  data: T[];
  meta: {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
  };
}

export type SortOrder = "asc" | "desc";
