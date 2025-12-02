import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAxiosWithToken } from "../../utils/api";

const initialState = {
    data: [],
}

export const getCart = createAsyncThunk("cart/getCart", async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      const { data } = await getAxiosWithToken.get("/Cart/get-products-from-cart",)   
      console.log(data);
      return data.data;
    }
    catch (error) {
        console.log(error);
    }
})

export const addCart = createAsyncThunk("cart/addCart", async (productId) => {
    try {
      const { data } = await getAxiosWithToken.post(`/Cart/add-product-to-cart?id=${productId}`);
      return data.data;
    } 
    catch (error) {
        console.log(error);
        
    }
})

export const deleteCart = createAsyncThunk("cart/deleteCart", async (id) => {
    try {
      const { data } = await getAxiosWithToken.delete(`/Cart/delete-product-from-cart?id=${id}`);
      return data.data;
    } 
    catch (error) {
        console.log(error);
    }
})

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(getCart.fulfilled, (state, action) => {
               state.data = action.payload;
            })
            .addCase(addCart.fulfilled, () => {
               console.log("добавлено");
            })  
    }
})

export default cartSlice.reducer;