import { configureStore } from "@reduxjs/toolkit";
import borderPreviewReducer from "../features/borderPreview/borderPreviewSlice";

export const store = configureStore({
  reducer: {
    borderPreview: borderPreviewReducer,
  },
});
