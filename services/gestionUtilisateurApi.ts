import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export type User = {
  id : number,
  firstname:string,
  lastname:string,
  email:string,
  role:string
}

// Define a service using a base URL and expected endpoints
export const gestionUtilisateurApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/v1' }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<User[],string>({
      query: () => ({
        url: `/user`,
        method: 'GET',
        headers: {
            'content-type': 'text/plain',
            'Authorization':''
        },
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllUsersQuery } = gestionUtilisateurApi
