import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { saveToken } from "../../utils/api";

const initialState = {
    data: [],
    user: null,
    token: null,
}

export const loginUser = createAsyncThunk("auth/loginUser", 
    async (user) => {
        const { data } = await axios.post(`http://37.27.29.18:8002/Account/login`, user);
        if(data & data.data) {   
            saveToken(data.data);
        }
        return data.data;    
    }
)

export const registerUser = createAsyncThunk("auth/registerUser", 
    async (user) => {
        const { data } = await axios.post(`http://37.27.29.18:8002/Account/register`, user);
        return data.data;    
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        Logout: (state) => {
            state.user = null;
            state.token = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.token = action.payload.token;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.user = action.payload;
            })
    }
})

export const { Logout } = authSlice.actions;
export default authSlice.reducer;