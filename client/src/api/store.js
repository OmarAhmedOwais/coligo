import { configureStore } from "@reduxjs/toolkit";
import { announcementsApi } from "./announcements.api";
import { examsApi } from "./exams.api";
import authReducer from "../utils/auth";

const createStore = configureStore({
  reducer: {
    [announcementsApi.reducerPath]: announcementsApi.reducer,
    [examsApi.reducerPath]: examsApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
        announcementsApi.middleware,
        examsApi.middleware
    ),
});

export const store = createStore;
