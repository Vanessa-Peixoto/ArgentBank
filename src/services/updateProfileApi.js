import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/**
 * @description Slice API to update user profile information
 */

export const updateProfileApi = createApi({
    //name in the store
    reducerPath: "updateProfileApi",
    //configuration for making HTTP request
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3001/api/v1'}),
    //define API request
    endpoints: (builder) => ({
        //
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