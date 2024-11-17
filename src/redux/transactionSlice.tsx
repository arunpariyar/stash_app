import { createSlice } from "@reduxjs/toolkit";

const transactionSlice = createSlice({
  name: "transactions",
  initialState: {
    data: [],
    status: "empty",
  },
  reducers: {
    setTransactions: (state, action) => {
      state.data = action.payload;
      state.status = "";
    },
  },
});

export const { setTransactions } = transactionSlice.actions;
export default transactionSlice.reducer;
