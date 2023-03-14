// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
//https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics
// Define our single API slice object
export const apiSlice = createApi({
	// The cache reducer expects to be added at `state.api` (already default - this is optional)
	reducerPath: 'api',
	// All of our requests will have URLs starting with ''
	baseQuery: fetchBaseQuery({ baseUrl: '' }),
	// The "endpoints" represent operations and requests for this server
	endpoints: (builder) => ({
		// The `getFriends` endpoint is a "query" operation that returns data
		getFriends: builder.query({
			// The URL for the request is '/friends'
			query: () => '/friends',
		}),
	}),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetFriendsQuery } = apiSlice;
