import baseApi from "../../baseApi";

const gameApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addGame: builder.mutation({
      query: (gameData) => ({
        url: "/games",
        method: "POST",
        body: gameData,
      }),
      invalidatesTags: ["games"],
    }),

    updateGame: builder.mutation({
      query: ({ id, gameData }) => ({
        url: `/games/${id}`,
        method: "PATCH",
        body: gameData,
      }),
      invalidatesTags: ["games"],
    }),

    getGames: builder.query({
      query: () => "/games",
      providesTags: ["games"],
    }),

    deleteGame: builder.mutation({
      query: (gameId) => ({
        url: `/games/${gameId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["games"],
    }),

    toggleGameStatus: builder.mutation({
      query: (gameId) => ({
        url: `/games/toggle-status/${gameId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["games"],
    }),
  }),
});

export const {
  useAddGameMutation,
  useGetGamesQuery,
  useUpdateGameMutation,
  useDeleteGameMutation,
  useToggleGameStatusMutation,
} = gameApi;
