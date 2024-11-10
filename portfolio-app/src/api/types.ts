export type ApiResponse<T> = {
  code: number;
  data?: T;
  error?: string;
};
