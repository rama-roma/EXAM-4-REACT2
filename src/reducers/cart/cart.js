import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    data: [],
}

export const getCart = createAsyncThunk("cart/getCart", async () => {
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.get(
      "http://37.27.29.18:8002/Cart/get-products-from-cart",
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );

    return data.data;
  } catch (error) {
    console.log(error);
  }
});


export const addCart = createAsyncThunk("cart/addCart", async (productId) => {
  try {
    const token = localStorage.getItem("token");

    const { data } = await axios.post(
      `http://37.27.29.18:8002/Cart/add-product-to-cart?id=${productId}`,
      {}, 
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
    );

    return data.data;
  } catch (error) {
    console.log(error);
  }
});


export const deleteCart = createAsyncThunk("cart/deleteCart", async (productId) => {
  try {
    const token = localStorage.getItem("token");
    console.log(token);
    

    const { data } = await axios.delete(
      `http://37.27.29.18:8002/Cart/delete-product-from-cart?id=${productId}`,
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );

    return data.data;
  } catch (error) {
    console.log(error);
  }
});



export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(getCart.fulfilled, (state, action) => {
               state.data = action.payload;
            })
            .addCase(addCart.fulfilled, (state, action) => {
               console.log("добавлено");
                if (action.payload) {
                    state.data.push(action.payload);
                }
            })  
            .addCase(deleteCart.fulfilled, (state, action) => {
                console.log(action.payload);
                state.data = state.data.filter(item => item.id !== action.payload.id);
            })
    }
})

export default cartSlice.reducer;