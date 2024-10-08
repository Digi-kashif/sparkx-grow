import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3002"}),
    endpoints: (builder) => ({
        createUser: builder.mutation({
            query: (body) => ({
                url: "/createUser",
                method: "POST",
                body,
            })
        }),

        createNewsLetter: builder.mutation({
            query: (body) => ({
                url: "/createNewsletter",
                method: "POST",
                body,
            })
        }),

        getAllNewsLetters: builder.query({
            query: () => "/getAllNewsLetters"
        })
    })
})

export const {
    useCreateUserMutation,
    useCreateNewsLetterMutation,
    useGetAllNewsLettersQuery,
} = usersApi