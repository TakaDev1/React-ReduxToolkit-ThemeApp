import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/slices/ThemeSlice";

const store = configureStore({
  reducer: themeReducer,
});

export default store;
