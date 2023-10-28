const getQueryParams = (params: Partial<Record<string, string | number>>) => {
  const searchParams = new URLSearchParams(window.location.search);

  Object.entries(params).forEach(([key, value]) => {
    if (key === "limit" || key === "offset") {
      return;
    }
    if (value !== undefined) {
      searchParams.set(key, value.toString());
    } else {
      searchParams.delete(key);
    }
  });
  const stringParams = searchParams.toString();

  return stringParams.length > 0 ? `?${stringParams}` : "";
};

export const addQueryParams = (params: Partial<Record<string, string | number>>) => {
  window.history.pushState(null, "", getQueryParams(params));
};
