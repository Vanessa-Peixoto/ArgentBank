import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/**
 * @description Slice for authentication, specifically for logging in.
*/
export const authApi = createApi({
    //name in the store
    reducerPath: "authApi",
    //configuration for making HTTP request
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3001/api/v1'}),
    //define API request
    endpoints: (builder) => ({
        //create mutation which allow to send request to connect
        login: builder.mutation({
            //define what the request will send (email, password) to the server
            query: ({email, password}) => ({
                url: '/user/login',
                method: 'POST',
                body: {email, password},
            })
        })
    })
})

export const { useLoginMutation } = authApi;