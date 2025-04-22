import baseApi from "../../baseApi";

const bankingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBanking: builder.mutation({
      query: (data) => ({
        url: "/bankings",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["bankings"],
    }),

    getBankings: builder.query({
      query: () => "/bankings",
      providesTags: ["bankings"],
    }),
  }),
});

export const { useAddBankingMutation, useGetBankingsQuery } = bankingApi;
