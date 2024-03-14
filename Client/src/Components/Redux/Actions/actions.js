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
export const searchProducts = createAsyncThunk(
  'products/searchProducts',
  async (searchkey,{rejectWithValue}) => {
    var searchProducts;
      try {
        const response = await axios.get("/api/products/getallproducts");
        searchProducts= response.data
        if(searchkey) {
          searchProducts = response.data.filter(product =>{return product.title.toLowerCase().includes(searchkey)})
          console.log(searchProducts)
        }
         return searchProducts;
      } catch (err) {
        throw rejectWithValue(err.response.data); 
      }
    }
);
export const sortProducts = createAsyncThunk(
  'products/sortProducts',
  async (sortkey,{rejectWithValue}) => {
    var sortProducts;
      try {
        const response = await axios.get("/api/products/getallproducts");
        sortProducts= response.data
        if(sortkey !== "popular") {
          if(sortkey === "htl"){
            sortProducts = response.data.sort((a,b)=> {return -a.price + b.price})
          }else {
            sortProducts = response.data.sort((a,b)=> {return a.price - b.price})
          }
        }
        return sortProducts;
      } catch (err) {
        throw rejectWithValue(err.response.data); 
      }
    }
);
export const filterProducts = createAsyncThunk(
  'products/filterProducts',
  async (categorykey,{rejectWithValue}) => {
    var filterProducts;
      try {
        const response = await axios.get("/api/products/getallproducts");
        filterProducts =response.data
        if(categorykey !== "all") {
          filterProducts = response.data.filter(product =>{return product.category.toLowerCase().includes(categorykey)})
        }
        return filterProducts;
      } catch (err) {
        throw rejectWithValue(err.response.data); 
      }
    }
);