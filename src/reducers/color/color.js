import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosRequest } from "../../utils/api";

const initialState = {
    data: [],
}

export const getColor = createAsyncThunk("color/getColor", async () => {
    try {
      const { data } = await axiosRequest.get("/Color/get-colors")
      console.log(data);
      return data.data;
    } 
    catch (error) {
        console.log(error);
    }
})

export const colorSlice = createSlice({
    name: "color",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder
        .addCase(getColor.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    }
})

export default colorSlice.reducer;