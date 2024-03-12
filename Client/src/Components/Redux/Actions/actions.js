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
    async (productbyid) => {
        try {
            const response = await axios.post(`/api/products/getproductbyid`,{productbyid});
            return response.data
        }
        catch (err) {
            throw err
        }
    }
)