import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
// import fetch from 'isomorphic-fetch'
// const fetch = require("isomorphic-fetch")
import fetch from "isomorphic-fetch";


// Define a service using a base URL and expected endpoints
export const rtkApi = createApi({
    reducerPath: 'api',

    baseQuery: fetchBaseQuery({

        baseUrl: __API__,
        prepareHeaders: headers => {
            const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || "";
            if (token) {
                headers.set('Authorization', token)
            }
            return headers
        },
        fetchFn: fetch,

    }),
    endpoints: (builder) => ({

    }),
})

