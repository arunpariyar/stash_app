//configuration for redux toolkit
import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./transactionSlice";
import potReducer from "./potSlice";

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    pots: potReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
