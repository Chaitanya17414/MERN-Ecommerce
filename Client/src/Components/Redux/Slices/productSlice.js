import {createSlice,combineReducers  } from "@reduxjs/toolkit";
import { fetchAllProducts,fetchProductsById,filterProducts, searchProducts, sortProducts } from "../Actions/actions";

const productSlice = createSlice({
    name: 'products',
    initialState: {
      products: [],
      status: 'idle',
      error: null
    },
    reducers:{

    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchAllProducts.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchAllProducts.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.products = action.payload;
        })
        .addCase(fetchAllProducts.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        })
        .addCase(searchProducts.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(searchProducts.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.products = action.payload;
        })
        .addCase(searchProducts.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        })
        .addCase(sortProducts.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(sortProducts.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.products = action.payload;
        })
        .addCase(sortProducts.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        })
        .addCase(filterProducts.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(filterProducts.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.products = action.payload;
        })
        .addCase(filterProducts.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
  });

  const productByIdSlice = createSlice ({
        name:"produt By Id",
        initialState: {
          product: [],
          status: 'idle',
          error: null
        },
        extraReducers: (builder) => {
          builder
            .addCase(fetchProductsById.pending, (state) => {
              state.status = 'loading';
            })
            .addCase(fetchProductsById.fulfilled, (state, action) => {
              state.status = 'succeeded';
              state.product = action.payload;
            })
            .addCase(fetchProductsById.rejected, (state, action) => {
              state.status = 'failed';
              state.error = action.error.message;
            });
        },

  })

const rootProductReducer = combineReducers({
  productList: productSlice.reducer,
  productById: productByIdSlice.reducer
});
export default rootProductReducer;