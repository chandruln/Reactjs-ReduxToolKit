import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items : [],
    status : null,
    error: null
}

export const productsFetch = createAsyncThunk(
    "products/productFetch",
    async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products?limit=3`);
            return response.data
        } catch (err) {
            return err.message
        }
    }
)

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers : {},
    extraReducers (builder) {
      builder
        .addCase(productsFetch.pending, (state, action) => {
            state.status = "pendng";
        })
        .addCase(productsFetch.fulfilled, (state, action) => {
            state.status = "success";
            console.log("productFecth success", action.payload);
            state.items = action.payload
        })
        .addCase(productsFetch.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.payload
        })
    }
})

export default productSlice.reducer