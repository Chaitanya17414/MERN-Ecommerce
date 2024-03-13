import { configureStore } from "@reduxjs/toolkit";
import rootProductReducer from "./Slices/productSlice";
import cartReducer from "./Slices/cartSlice";
import authReducer from "./Slices/authSlice"

 const store = configureStore({
    reducer: {
        product: rootProductReducer,
        cart: cartReducer,
        auth:authReducer
    }
 })

 export default store;