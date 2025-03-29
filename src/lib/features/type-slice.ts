import { Itype } from "@/interfaces/type";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Array<Itype> = [];

const listSlice = createSlice({
  name: "types",
  initialState: initialState,
  reducers: {
    setTypes: (state, actions) => {
      console.log('slice -> actions', actions.payload);

      return [...actions.payload];
    }
  }
});

export const { setTypes } = listSlice.actions;

export default listSlice;