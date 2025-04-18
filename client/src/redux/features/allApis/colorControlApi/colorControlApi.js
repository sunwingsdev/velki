import baseApi from "../../baseApi";

const colorControlApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addColorControl: builder.mutation({
      query: (data) => ({
        url: "/color-controls",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["colorControls"],
    }),

    getColorControls: builder.query({
      query: () => "/color-controls",
      providesTags: ["colorControls"],
    }),

    updateColorControl: builder.mutation({
      query: ({ id, data }) => ({
        url: `/color-controls/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["colorControls"],
    }),

    deleteColorControl: builder.mutation({
      query: (id) => ({
        url: `/color-controls/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["colorControls"],
    }),
  }),
});

export const {
  useAddColorControlMutation,
  useGetColorControlsQuery,
  useUpdateColorControlMutation,
  useDeleteColorControlMutation,
} = colorControlApi;
