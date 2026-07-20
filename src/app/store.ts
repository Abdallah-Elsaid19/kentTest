import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "../services/api";
import uiReducer from "../store/slices/uiSlice";
import navigationReducer from "../store/slices/navigationSlice";
import filtersReducer from "../store/slices/filtersSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    navigation: navigationReducer,
    filters: filtersReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;