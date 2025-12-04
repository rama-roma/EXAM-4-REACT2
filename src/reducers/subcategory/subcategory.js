import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/api";

const initialState = {
    data: [],
}

export const getSubcategory = createAsyncThunk("subcategory/getSubcategory", async () => {
    try {
      const { data } = await axiosRequest("/SubCategory/get-sub-category");
      console.log(data);
      return data.data;
    } 
    catch (error) {
        console.log(error);
    }
})

export const subcategorySlice = createSlice({
    name: "subcategory",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
          .addCase(getSubcategory.fulfilled, (state, action) => {
            state.data = action.payload;
          })
    }
})

export default subcategorySlice.reducer;