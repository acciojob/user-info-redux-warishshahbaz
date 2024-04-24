// reducers/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setName, setEmail } = userSlice.actions;

export const selectName = (state) => state.user.name;
export const selectEmail = (state) => state.user.email;

export default userSlice.reducer;
