import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./../slice/auth";
import cartSlice from "../slice/cartSlice";
import products from "../slice/productSlice";
export default configureStore({
  reducer: {
    auth: AuthReducer,
    cart: cartSlice,
    products: products,
  },
});
