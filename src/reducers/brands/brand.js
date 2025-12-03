import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils/api";

const initialState = {
    data: [],
}

export const getBrand = createAsyncThunk("brand/getBrand", async () => {
    try {
      const { data } = await axiosInstance.get("/Brand/get-brands");
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