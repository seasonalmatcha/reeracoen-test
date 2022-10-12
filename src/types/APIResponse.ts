export type APIResponse<T> = {
  status: string;
  copyright: string;
  num_results: number;
  results: T[];
};
