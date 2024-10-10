import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const profileApi = createApi({
    //name in the store
    reducerPath: "profileApi",
    //configuration for making HTTP request
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3001/api/v1'}),
    //define API request
    endpoints: (builder) => ({
        //create mutation which allow to send request to connect
        getProfile: builder.mutation({
            query: () => ({
                url: '/user/profile',
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('token')}`,
                }
            })
        })
    })
})

export const { useGetProfileMutation } = profileApi;