import { createSlice } from "@reduxjs/toolkit";

const potSlice = createSlice({
  name: "pots",
  initialState: {
    data: [],
    status: "empty",
  },
  reducers: {
    setPots: (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    },
  },
});

export const { setPots } = potSlice.actions;
export default potSlice.reducer;
