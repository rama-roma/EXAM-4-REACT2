import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data: [],
}

export const getBrand = createAsyncThunk("brand/getBrand", async () => {
    try {
      const { data } = await axios.get("http://37.27.29.18:8002/Brand/get-brands", {
        header:{
            "Content-Type":"application/json",
        }
      });
      console.log(data);
      return data.data;
    } 
    catch (error) {
        console.log(error);
    }
})

export const brandSlice = createSlice({
    name: "brand",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
          .addCase(getBrand.fulfilled, (state, action) => {
            state.data = action.payload
          })
    }
})

export default brandSlice.reducer;