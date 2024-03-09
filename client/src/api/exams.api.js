import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./baseUrl";

export const examsApi = createApi({
  reducerPath: "examsApi",
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
  tagTypes: ["examsApi"],
  endpoints: (builder) => ({
    getAllExams: builder.query({
      query: (params) => ({ url: `/exams${params ? params : ""}` }),
      providesTags: ["examsApi"],
    }),
    getExamById: builder.query({
      query: (id) => ({ url: `/exams/${id}` }),
      providesTags: ["examsApi"],
    }),
    createExam: builder.mutation({
      query: (payload) => ({
        url: "/exams",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["examsApi"],
    }),
    updateExam: builder.mutation({
      query: ({ payload, id }) => ({
        url: `/exams/${id}`,
        method: "PUT",
        body: payload,
      }),
      invalidatesTags: ["examsApi"],
    }),
    deleteExamById: builder.mutation({
      query: (id) => ({
        url: `/exams/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["examsApi"],
    }),
  }),
});

export const {
  useGetAllExamsQuery,
  useGetExamsByIdQuery,
  useCreateExamsMutation,
  useUpdateExamsMutation,
  useDeleteExamsByIdMutation,
} = examsApi;
