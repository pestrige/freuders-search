import axios, { AxiosRequestConfig } from "axios";

import { BASE_API_URL } from "./constants.ts";

const api = axios.create({
  baseURL: BASE_API_URL,
});

/**
 * API uses camelCase, don't need to convert
 * but if you need to convert, uncomment it
 */
// api.interceptors.response.use((response) => {
//   if (response.data && response.headers["content-type"] === "application/json") {
//     response.data = toCamelCase(response.data);
//   }
//
//   return response;
// });
// api.interceptors.request.use((config) => {
//   const newConfig = { ...config };
//
//   if (config.params) {
//     newConfig.params = toSnakeCase(config.params);
//   }
//
//   if (config.data) {
//     newConfig.data = toSnakeCase(config.data);
//   }
//
//   return newConfig;
// });

export class BaseApi {
  protected get<T>(url: string, config?: AxiosRequestConfig) {
    return api.get<T>(url, config);
  }
}
