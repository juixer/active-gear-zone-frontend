import { baseApi } from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // FOR ALL PRODUCT FILTERING
    getProducts: builder.query({
      query: (query) => ({
        url: `/products/filter?searchTerm=${query.searchTerm}&sort=${query.sort}&category=${query.category}&brand=${query.brand}&rating=${query.rating}&page=${query.page}&limit=${query.limit}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    // ADDING PRODUCT INTO DB
    addProduct: builder.mutation({
      query: (productInfo) => ({
        url: "/products",
        method: "POST",
        body: productInfo,
      }),
      invalidatesTags: ["product"],
    }),
    // DELETE PRODUCT FROM DB
    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
    // UPDATE PRODUCT IN DB
    updateProduct: builder.mutation({
      query: (updateData) => ({
        url: `/products/${updateData.productId}`,
        method: "PATCH",
        body: updateData.updateInfo,
      }),
      invalidatesTags: ["product"],
    }),
    // SINGLE PRODUCT INFO
    getSingleProduct: builder.query({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "GET",
      }),
    }),
    // LATEST PRODUCTS
    getLatestProduct: builder.query({
      query: () => ({
        url: "/products/latest",
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    // ALL PRODUCTS
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
