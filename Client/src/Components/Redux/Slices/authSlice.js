import { registerUser } from "../Actions/actions";
import  {jwtDecode} from "jwt-decode";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("token")? JSON.parse(localStorage.getItem("token")):[],
    _id: "",
    name:"",
    email:"",
    registerStatus:"",
    registerError:"",
    loginStatus:"",
    loginError:"",
    userLoaded: false

}
const authSlice = createSlice({
    name:"Cart",
    initialState,
    reducer: ({}),
    extraReducers: (builder) => {
        builder
          .addCase(registerUser.pending, (state) => {
            state.registerStatus = 'pending';
          })
          .addCase(registerUser.fulfilled, (state, action) => {
            if(action.payload) {
                const user = jwtDecode(action.payload)
                return {
                    ...state,
                    token: action.payload,
                    name:user.name,
                    email:user.email,
                    _id:user._id,
                    registerStatus:"Success"
                }
            }else return state 
          })
          .addCase(registerUser.rejected, (state, action) => {
            state.registerStatus = 'rejected';
            state.registerError= action.payload;
          });
    }
})


export default authSlice.reducer