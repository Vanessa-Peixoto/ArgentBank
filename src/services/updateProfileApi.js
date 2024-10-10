import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const updateProfileApi = createApi({
    //name in the store
    reducerPath: "updateProfileApi",
    //configuration for making HTTP request
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3001/api/v1'}),
    //define API request
    endpoints: (builder) => ({
        //create mutation which allow to send request to connect
        updateProfile: builder.mutation({
            query: ({firstName, lastName}) => ({
                url: '/user/profile',
                method: 'PUT',
                body: {firstName, lastName},
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('token')}`,
                }
            })
        })
    })
})

export const { useUpdateProfileMutation } = updateProfileApi;