import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  mobileMenuOpen: boolean;
  searchOpen: boolean;
  activeMegaMenu: string | null;
  scrollY: number;
  cookieConsent: boolean | null;
  notification: {
    message: string;
    type: "success" | "error" | "info";
    visible: boolean;
  } | null;
}

const initialState: UIState = {
  mobileMenuOpen: false,
  searchOpen: false,
  activeMegaMenu: null,
  scrollY: 0,
  cookieConsent: null,
  notification: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setMobileMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.mobileMenuOpen = action.payload;
    },
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    setSearchOpen: (state, action: PayloadAction<boolean>) => {
      state.searchOpen = action.payload;
    },
    setActiveMegaMenu: (state, action: PayloadAction<string | null>) => {
      state.activeMegaMenu = action.payload;
    },
    setScrollY: (state, action: PayloadAction<number>) => {
      state.scrollY = action.payload;
    },
    setCookieConsent: (state, action: PayloadAction<boolean>) => {
      state.cookieConsent = action.payload;
    },
    showNotification: (
      state,
      action: PayloadAction<{ message: string; type: "success" | "error" | "info" }>
    ) => {
      state.notification = { ...action.payload, visible: true };
    },
    hideNotification: (state) => {
      state.notification = null;
    },
  },
});

export const {
  setMobileMenuOpen,
  toggleMobileMenu,
  setSearchOpen,
  setActiveMegaMenu,
  setScrollY,
  setCookieConsent,
  showNotification,
  hideNotification,
} = uiSlice.actions;

export default uiSlice.reducer;