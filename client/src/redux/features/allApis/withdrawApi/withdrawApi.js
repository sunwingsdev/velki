import baseApi from "../../baseApi";

const withdrawApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addWithdraw: builder.mutation({
      query: (data) => ({
        url: "/withdraws",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["withdraws"],
    }),

    getWithdraws: builder.query({
      query: () => "/withdraws",
      providesTags: ["withdraws"],
    }),

    updateWithdrawStatus: builder.mutation({
      query: ({ id, data }) => ({
        url: `/withdraws/update-status/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["withdraws"],
    }),
  }),
});
export const {
  useAddWithdrawMutation,
  useGetWithdrawsQuery,
  useUpdateWithdrawStatusMutation,
} = withdrawApi;
