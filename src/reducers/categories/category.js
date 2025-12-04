import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/api";

const initialState = {
    data: [],
}

export const getCategory = createAsyncThunk("category/getCategory", async () => {
    try {
      const { data } = await axiosRequest.get("/Category/get-categories");
      console.log(data);
      return data.data;
    } 
    catch (error) {
        console.log(error);
    }
})

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder
        .addCase(getCategory.fulfilled, (state, action) => {
            state.data = action.payload
        })
    }
})

export default categorySlice.reducer;