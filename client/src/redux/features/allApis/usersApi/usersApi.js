import baseApi from "../../baseApi";

const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Register a user
    addUser: builder.mutation({
      query: (data) => ({
        url: "/users/register",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    // Login a user
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "/users/login",
        method: "POST",
        body: credentials,
      }),
      providesTags: ["users"],
    }),
    // Fetch authenticated user
    getAuthenticatedUser: builder.query({
      query: (token) => ({
        url: "/users/profile",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["users"],
    }),

    // get all users
    getUsers: builder.query({
      query: () => "/users",
      providesTags: ["users"],
    }),

    updateBalance: builder.mutation({
      query: ({ parentId, userId, type, amount }) => ({
        url: `/users/balance/${userId}`,
        method: "PUT",
        body: { type, amount, parentId, userId },
      }),
      invalidatesTags: ["users"],
    }),

    updateRemark: builder.mutation({
      query: ({ id, data }) => ({
        url: `/users/remark/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    getUserById: builder.query({
      query: (id) => `users/${id}`,
      providesTags: ["users"],
    }),

    updateProile: builder.mutation({
      query: ({ id, data }) => ({
        url: `/users/profile/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    addMotherAdminBalance: builder.mutation({
      query: ({ id, data }) => ({
        url: `/users/mother-admin-balance/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    updateActiveStatus: builder.mutation({
      query: ({ id, data }) => ({
        url: `/users/active-status/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useAddUserMutation,
  useLoginUserMutation,
  useLazyGetAuthenticatedUserQuery,
  useGetUsersQuery,
  useUpdateBalanceMutation,
  useLazyGetUserByIdQuery,
  useUpdateRemarkMutation,
  useUpdateProileMutation,
  useAddMotherAdminBalanceMutation,
  useUpdateActiveStatusMutation,
} = usersApi;
