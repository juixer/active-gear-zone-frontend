import { baseApi } from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags:['product']
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
