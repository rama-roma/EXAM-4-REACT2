import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    data: [],
    TotalPrice:null,
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


export const deleteCart = createAsyncThunk("cart/deleteCart", async ({productId,dispatch}) => {
  try {
    const token = localStorage.getItem("token");
    console.log(token);
    

    const { data } = await axios.delete(
      `http://37.27.29.18:8002/Cart/delete-product-from-cart?id=${productId}`,
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );
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
      await axios.put(`http://37.27.29.18:8002/Cart/increase-product-in-cart?id=${id}`,{}, {
      headers:{
        "Content-Type":"application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(getCart())
  } 
  catch (error) {
    console.log(error);
  }
})

export const reduce = createAsyncThunk("cart/reduce", async (id,{dispatch}) => {
  try {
    const token = localStorage.getItem("token");
    console.log(token);
      await axios.put(`http://37.27.29.18:8002/Cart/reduce-product-in-cart?id=${id}`,{}, {
      headers:{
        "Content-Type":"application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(getCart())
  } 
  catch (error) {
    console.log(error);
  }
})

export const deleteAll = createAsyncThunk("cart/deleteAll", async (id,{dispatch}) => {
  try {
    const token = localStorage.getItem("token");
     await axios.delete("http://37.27.29.18:8002/Cart/clear-cart", {
      headers: {
        "Content-Type":"application/json",
        Authorization: `Bearer ${token}`
      }
    });
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