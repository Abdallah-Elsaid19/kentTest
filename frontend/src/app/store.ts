import { configureStore, createSlice, type PayloadAction } from "@reduxjs/toolkit";

type UiState = { mobileNavigationOpen: boolean };

const uiSlice = createSlice({
  name: "ui",
  initialState: { mobileNavigationOpen: false } as UiState,
  reducers: {
    setMobileNavigationOpen(state, action: PayloadAction<boolean>) {
      state.mobileNavigationOpen = action.payload;
    },
  },
});

export const { setMobileNavigationOpen } = uiSlice.actions;

export const store = configureStore({ reducer: { ui: uiSlice.reducer } });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
