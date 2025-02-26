import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./features/listSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      list: listSlice.reducer
    }
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];