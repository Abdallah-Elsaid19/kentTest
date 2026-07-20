import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { FilterState } from "../types";

const initialState: FilterState = {
  search: "",
  college: "",
  level: "",
  funding: "",
  category: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setCollege: (state, action: PayloadAction<string>) => {
      state.college = action.payload;
    },
    setLevel: (state, action: PayloadAction<string>) => {
      state.level = action.payload;
    },
    setFunding: (state, action: PayloadAction<string>) => {
      state.funding = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const { setSearch, setCollege, setLevel, setFunding, setCategory, resetFilters } =
  filtersSlice.actions;

export default filtersSlice.reducer;