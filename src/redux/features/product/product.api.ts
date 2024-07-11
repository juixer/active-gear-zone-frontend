import { baseApi } from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (query) => ({
        url: `/products/filter?searchTerm=${query.searchTerm}&sort=${query.sort}&category=${query.category}&brand=${query.brand}&rating=${query.rating}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    addProduct: builder.mutation({
      query: (productInfo) => ({
        url: "/products",
        method: "POST",
        body: productInfo,
      }),
      invalidatesTags: ["product"],
    }),
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: (updateData) => ({
        url: `/products/${updateData.productId}`,
        method: "PATCH",
        body: updateData.updateInfo,
      }),
      invalidatesTags: ["product"],
    }),
    getSingleProduct: builder.query({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "GET",
      }),
    }),
    getLatestProduct: builder.query({
      query: () => ({
        url: "/products/latest",
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    getAllProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: ["product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useGetSingleProductQuery,
  useGetLatestProductQuery,
  useGetAllProductsQuery
} = productApi;
