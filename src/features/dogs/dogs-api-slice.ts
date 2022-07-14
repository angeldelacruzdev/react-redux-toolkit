import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface berries {
  name: string;
  url: string;
}

interface Berry {
  count: number;
  next: string;
  results: berries[];
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2",
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<Berry, number | void>({
        query(limit = 10) {
          return `/berry?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchBreedsQuery } = apiSlice;
