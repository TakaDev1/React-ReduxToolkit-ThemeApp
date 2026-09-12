import type { ThemeType } from "../types/ThemeType";
import { createSlice } from "@reduxjs/toolkit";
const initialState: ThemeType = {
  darkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
