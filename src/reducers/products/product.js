import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";
import { axiosRequest } from "../../utils/api";


const initialState = {
    data: [],
    dataById: null
}

export const getUser = createAsyncThunk("product/getUser", async () => {
    try {
      const { data } = await axiosRequest.get("/Product/get-products",{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
      });   
      return data.data;
    } 
    catch (error) {
        console.log(error);
    }  
})


export const getById = createAsyncThunk("product/getById", async (id) => {
    try {
      const { data } = await axios.get(`http://37.27.29.18:8002/Product/get-product-by-id?id=${id}`, {
        headers: {
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
      });
      return data.data;
    } 
    catch (error) {
        console.log(error);
    }
})



export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getUser.fulfilled, (state, action) => {
            state.data = action.payload;
        })
        .addCase(getById.fulfilled, (state, action) => {
            state.dataById = action.payload
        })
    }
})


export default productSlice.reducer;
