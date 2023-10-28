/**
 * Map with keys as AppRoute name and values as
 * pure function returns route path depends on arguments like id, etc.
 * @example
 * main: () => "/"
 * user: (id: string) => `/user/${id}`
 */

export const getRoute = {
  main: () => "/",
  expert: (id: string) => `/expert/${id}`,
} as const;
