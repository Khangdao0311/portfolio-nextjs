import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Overlay = {
  isOpen: false,
};

export const overlay = createSlice({
  name: "overlay",
  initialState,
  reducers: {
    setToggle: (state: Overlay, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToggle } = overlay.actions;

export default overlay.reducer;
