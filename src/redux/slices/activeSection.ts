import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ActiveSection = {
  id: "",
};

export const activeSection = createSlice({
  name: "activeSection",
  initialState,
  reducers: {
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActiveSection } = activeSection.actions;

export default activeSection.reducer;
