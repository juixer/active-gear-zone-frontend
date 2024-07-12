import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    // BACKEND URL
    baseUrl: "https://active-gear-backend.vercel.app/api",
    credentials: "include",
  }),
  tagTypes: ["product"],
  endpoints: () => ({}),
});
