import { loginUser, registerUser, updateUser } from "../Actions/actions";
import  {jwtDecode} from "jwt-decode";
import { createSlice } from "@reduxjs/toolkit";
import { toast} from 'react-toastify';
import { useDispatch } from "react-redux";

const initialState = {
    token: localStorage.getItem("token")? (localStorage.getItem("token")):"",
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
    name:"authSlice",
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
              updateStatus:"",
              updateError:""
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

                toast.success("User Sucessfully Registered......",{position:"bottom-left"})
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
          })
          .addCase(loginUser.pending, (state) => {
            state.loginStatus = 'pending';
          })
          .addCase(loginUser.fulfilled, (state, action) => {
            if(action.payload) {
                const user = jwtDecode(action.payload)
                toast.success(`User Successfully LoggedIn.....`, {
                  position:"bottom-left"
              })
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
          }) .addCase(updateUser.pending, (state) => {
            state.updateStatus = 'pending';
          })
          .addCase(updateUser.fulfilled, (state, action) => {
            if(action.payload) {
                const user = jwtDecode(action.payload)

                return {
                    ...state,
                    token: action.payload,
                    name:user.name,
                    email:user.email,
                    _id:user._id,
                    updateStatus:"Success"
                }
            }else return state 
          })
          .addCase(updateUser.rejected, (state, action) => {
            state.updateStatus = 'rejected';
            state.updateError= action.payload;
          });
    }
})

export const {loadUser,logoutUser} = authSlice.actions
export default authSlice.reducer