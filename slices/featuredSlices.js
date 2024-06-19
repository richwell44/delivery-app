import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  featured: null,
};

export const featuredSlice = createSlice({
  name: "featured",
  initialState,
  reducers: {
    setResturant: (state, action) => {
      state.featured = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFeatured } = featuredSlice.actions;

export const selectFeatured = (state) => state.featured.featured;

export default featuredSlice.reducer;
