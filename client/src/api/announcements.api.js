import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./baseUrl";

export const announcementsApi = createApi({
  reducerPath: "announcementsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["announcementsApi"],
  endpoints: (builder) => ({
    getAllAnnouncements: builder.query({
      query: (params) => ({ url: `/announcements${params ? params : ""}` }),
      providesTags: ["announcementsApi"],
    }),
    getAnnouncementById: builder.query({
      query: (id) => ({ url: `/announcements/${id}` }),
      providesTags: ["announcementsApi"],
    }),
    createAnnouncement: builder.mutation({
      query: (payload) => ({
        url: "/announcements",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["announcementsApi"],
    }),
    updateAnnouncement: builder.mutation({
      query: ({ payload, id }) => ({
        url: `/announcements/${id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["announcementsApi"],
    }),
    deleteAnnouncementById: builder.mutation({
      query: (id) => ({
        url: `/announcements/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["announcementsApi"],
    }),
  }),
});

export const {
  useGetAllAnnouncementsQuery,
  useGetAnnouncementsByIdQuery,
  useCreateAnnouncementsMutation,
  useUpdateAnnouncementsMutation,
  useDeleteAnnouncementsByIdMutation,
} = announcementsApi;
