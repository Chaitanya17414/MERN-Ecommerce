import { loginUser, registerUser } from "../Actions/actions";
import  {jwtDecode} from "jwt-decode";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("token")? JSON.parse(localStorage.getItem("token")):"",
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
    reducers: {
        loadUser: (state, action)=> {
            const token = state.token;
      
            if (token) {
              const user = jwtDecode(token);
              return {
                ...state,
                token,
                name: user.name,
                email: user.email,
                _id: user._id,
                userLoaded: true,
              };
            } else return { ...state, userLoaded: true };
          },
          logoutUser: (state, action) => {
            localStorage.removeItem("token");
      
            return {
              ...state,
              token: "",
              name: "",
              email: "",
              _id: "",
              registerStatus: "",
              registerError: "",
              loginStatus: "",
              loginError: "",
            };
          },
    },
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
            state.loginStatus = 'rejected';
            state.loginError= action.payload;
          })
          .addCase(loginUser.pending, (state) => {
            state.loginStatus = 'pending';
          })
          .addCase(loginUser.fulfilled, (state, action) => {
            if(action.payload) {
                const user = jwtDecode(action.payload)
                return {
                    ...state,
                    token: action.payload,
                    name:user.name,
                    email:user.email,
                    _id:user._id,
                    loginStatus:"Success"
                }
            }else return state 
          })
          .addCase(loginUser.rejected, (state, action) => {
            state.loginStatus = 'rejected';
            state.loginError= action.payload;
          });
    }
})

export const {loadUser,logoutUser} = authSlice.actions
export default authSlice.reducer