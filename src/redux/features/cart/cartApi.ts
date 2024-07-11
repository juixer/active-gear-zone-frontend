import { baseApi } from "@/redux/api/baseApi";

export const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    confirmOrder: builder.mutation({
      query: (orderInfo) => ({
        url: "/order",
        method: "POST",
        body: orderInfo,
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const { useConfirmOrderMutation } = cartApi;
