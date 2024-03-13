import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProducts = createAsyncThunk(
    'products/fetchAll',
    async () => {
        try {
          const response = await axios.get("/api/products/getallproducts");
          return response.data;
        } catch (err) {
          throw err; 
        }
      }
  );


export const fetchProductsById = createAsyncThunk(
    "products/fetchById",
    async (productbyid,{rejectWithValue}) => {
        try {
            const response = await axios.post(`/api/products/getproductbyid`,{productbyid});
            return response.data
        }
        catch (err) {
          console.log(err.response.data)
            throw rejectWithValue(err.response.data)
        }
    }
)
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (user,{rejectWithValue}) => {
      try {
          const token = await axios.post(`/api/user/register`,{
            name:user.name,
            email:user.email,
            password:user.password
          });
          localStorage.setItem("token",token.data)
          return token.data
      }
      catch (err) {
          throw rejectWithValue(err.response.data)
      }
  }
)
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (user,{rejectWithValue}) => {
      try {
          const token = await axios.post(`/api/user/login`,{
            email:user.email,
            password:user.password
          });
          localStorage.setItem("token",token.data)
          return token.data
      }
      catch (err) {
          throw rejectWithValue(err.response.data)
      }
  }
)