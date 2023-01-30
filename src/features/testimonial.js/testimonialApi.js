// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const testimonialApi = createApi({
    reducerPath: 'testimonialApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3034/' }),
    endpoints: (builder) => ({
        getTestimonial: builder.query({
            query: () => ({
                url: "testimonial",
                method: 'GET'
            }),
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTestimonialQuery } = testimonialApi