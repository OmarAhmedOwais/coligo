import { configureStore } from "@reduxjs/toolkit";
import { announcementsApi } from "./announcements.api";
import { examsApi } from "./exams.api";

const createStore = configureStore({
  reducer: {
    [announcementsApi.reducerPath]: announcementsApi.reducer,
    [examsApi.reducerPath]: examsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
        announcementsApi.middleware,
        examsApi.middleware
    ),
});

export const store = createStore;
