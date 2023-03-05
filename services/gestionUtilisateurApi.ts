import { User } from '@/code/Type'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const gestionUtilisateurApi = createApi({
  reducerPath: 'gestionUtilisateurApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/v1' }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<User[], string>({
      query: () => ({
        url: `/user`,
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          Authorization: '',
        },
      }),
    }),
    ajouterUser: builder.mutation({
      query: (body) => ({
        url: `/user`,
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Authorization: '',
        },
        body,
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllUsersQuery, useAjouterUserMutation } =
  gestionUtilisateurApi
