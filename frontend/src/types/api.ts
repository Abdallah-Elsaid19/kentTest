export type Pagination = {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
};

export type CollectionResponse<T> = { items: T[]; pagination: Pagination };

export type ApiErrorBody = {
  error: { code: string; message: string; details?: Record<string, string | Record<string, string>> };
  requestId?: string;
};
