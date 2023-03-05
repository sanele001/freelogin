import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "sanele",
  toeken: false,
  value: 0,
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = userSlice.actions;

export default userSlice.reducer;
