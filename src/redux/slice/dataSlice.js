import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [{ userid: 1, text: "pass" }],
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

// extraReducers: (builder) => {
//   builder.addCase(userid.pending, (state) => {
//     state.loading = true;
//   });
//   builder.addCase(userid.fulfilled, (state, action) => {
//     state.loading = false;
//     state.data = action.payload;
//   });
//   builder.addCase(userid.rejected, (state, action) => {
//     console.log("Error", action.payload);
//     state.error = true;
//   });
// },
