export type SupabaseResponse<T = undefined> = Promise<{
  data?: T;
  count?: number;
}>;
