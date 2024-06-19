import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import featuredSlice from "./slices/featuredSlices";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    featured: featuredSlice,
  },
});
