import { configureStore } from "@reduxjs/toolkit";
import rootProductReducer from "./Slices/productSlice";
import cartReducer from "./Slices/cartSlice";
import authReducer from "./Slices/authSlice"
import rootOrderReducer from "./Slices/checkoutSlice";

 const store = configureStore({
    reducer: {
        product: rootProductReducer,
        cart: cartReducer,
        auth:authReducer,
        order: rootOrderReducer
    }
 })

 export default store;