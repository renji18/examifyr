import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    sendData: (state, action) => {
      state.data = [...state.data, action.payload];
    },
  },
});

export const { sendData } = dataSlice.actions;
export default dataSlice.reducer;
