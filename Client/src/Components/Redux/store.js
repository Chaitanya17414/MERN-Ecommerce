import { configureStore } from "@reduxjs/toolkit";
import rootProductReducer from "./Slices/productSlice";
import cartReducer from "./Slices/cartSlice";

 const store = configureStore({
    reducer: {
        productReducer: rootProductReducer,
        cart: cartReducer
    }
 })

 export default store;