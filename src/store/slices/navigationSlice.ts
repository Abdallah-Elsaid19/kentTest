import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface NavigationState {
  expandedMobileItems: string[];
  breadcrumbs: { label: string; href: string }[];
}

const initialState: NavigationState = {
  expandedMobileItems: [],
  breadcrumbs: [],
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    toggleMobileItem: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.expandedMobileItems.includes(id)) {
        state.expandedMobileItems = state.expandedMobileItems.filter((item) => item !== id);
      } else {
        state.expandedMobileItems.push(id);
      }
    },
    setBreadcrumbs: (
      state,
      action: PayloadAction<{ label: string; href: string }[]>
    ) => {
      state.breadcrumbs = action.payload;
    },
    clearBreadcrumbs: (state) => {
      state.breadcrumbs = [];
    },
  },
});

export const { toggleMobileItem, setBreadcrumbs, clearBreadcrumbs } =
  navigationSlice.actions;

export default navigationSlice.reducer;