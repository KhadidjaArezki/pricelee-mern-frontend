import { apiSlice } from "./apiSlice"

const TRACKER_URI = "/trackers"

export const trackerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTracker: builder.query({
      query: () => ({
        url: TRACKER_URI,
        method: "GET",
      }),
    }),
    createAlert: builder.mutation({
      query: (newProduct) => ({
        url: TRACKER_URI,
        method: "POST",
        body: { ...newProduct },
      }),
    }),
    updateAlert: builder.mutation({
      query: ({ id, ...alertToUpdate }) => ({
        url: `${TRACKER_URI}/${id}`,
        method: "PUT",
        body: { ...alertToUpdate },
      }),
    }),
    deleteAlert: builder.mutation({
      query: (id) => ({
        url: `${TRACKER_URI}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
})

export const {
  useGetTrackerQuery,
  useCreateAlertMutation,
  useUpdateAlertMutation,
  useDeleteAlertMutation,
} = trackerApiSlice
