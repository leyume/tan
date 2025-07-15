import axios from "axios";

export const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000,
  // headers: {'Authorization':  'Bearer ' + localStorage.getItem('token')}
});

//Query Client Configuration
import { QueryClient } from "@tanstack/vue-query";

export const qc = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, // Never mark data as stale
      refetchOnMount: false, // Don't refetch on mount
      refetchOnWindowFocus: false, // Don't refetch when the window gains focus
    },
  },
});
