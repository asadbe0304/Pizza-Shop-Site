import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  loggedIn: false,
  modal: false,
  close: false,
  error: null,
  user: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // login
    loginUserStart: (state) => {
      state.isLoading = true;
    },
    loginUserSuccess: (state) => {},
    loginUserFailure: (state) => {},

    // register
    registerUserStart: (state) => {
      state.isLoading = true;
    },
    registerUserSuccess: (state) => {
      state.loggedIn = true;
    },
    registerUserFailure: (state) => {
      (state.isLoading = false), (state.error = "erorr");
    },
    modalOpen: (state) => {
      state.modal = true;
    },
    modalClose: (state) => {
      state.modal = false;
    },
  },
});

export const {
  loginUserStart,
  registerUserStart,
  registerUserSuccess,
  registerUserFailure,
  modalOpen,
  modalClose,
} = authSlice.actions;
export default authSlice.reducer;
