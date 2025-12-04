import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/api";


const initialState = {
    data: [],
    TotalPrice:null,
}

export const getCart = createAsyncThunk("cart/getCart", async () => {
  try {
    const { data } = await axiosRequest.get("/Cart/get-products-from-cart");
    return data.data;
  } catch (error) {
    console.log(error);
  }
});


export const addCart = createAsyncThunk("cart/addCart", async (productId) => {
  try {
    const { data } = await axiosRequest.post(`/Cart/add-product-to-cart?id=${productId}`,{});
    return data.data;
  } catch (error) {
    console.log(error);
  }
});


export const deleteCart = createAsyncThunk("cart/deleteCart", async ({productId,dispatch}) => {
  try {
    const token = localStorage.getItem("token");
    console.log(token);
    
    const { data } = await axiosRequest.delete(`/Cart/delete-product-from-cart?id=${productId}`);
    dispatch(getCart())

    return data.data;
  } catch (error) {
    console.log(error);
  }
});


export const increase = createAsyncThunk("cart/increase", async (id,{dispatch}) => {
  try {
    const token = localStorage.getItem("token");
    console.log(token);
      await axiosRequest.put(`/Cart/increase-product-in-cart?id=${id}`,{});
    dispatch(getCart())
  } 
  catch (error) {
    console.log(error);
  }
})

export const reduce = createAsyncThunk("cart/reduce", async (id,{dispatch}) => {
  try {
      await axiosRequest.put(`/Cart/reduce-product-in-cart?id=${id}`,{});
    dispatch(getCart())
  } 
  catch (error) {
    console.log(error);
  }
})

export const deleteAll = createAsyncThunk("cart/deleteAll", async (id,{dispatch}) => {
  try {
     await axiosRequest.delete("/Cart/clear-cart");
    dispatch(getCart())  
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
      state.TotalPrice = action.payload[0]?.totalPrice
    })
    .addCase(addCart.fulfilled, (state, action) => {
      console.log("добавлено");
      if (action.payload) {
        state.data = action.payload
        
      }
    })
 
}
})

export default cartSlice.reducer;