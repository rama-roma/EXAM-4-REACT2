import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import { axiosRequest, saveToken } from "../../utils/api";

const initialState = {
  data: [],
  user: null,
  token: null,
  userData: null,
};

export const loginUser = createAsyncThunk("auth/loginUser", async (user) => {
  try {
    const { data } = await axiosRequest.post("/Account/login",user);
    if (data && data.data) {
      saveToken(data.data);
    }
    return data.data;
  } catch (error) {
    console.log(error);
  }
});

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (user) => {
    try {
      const { data } = await axiosRequest.post("/Account/register", user);
      if (data && data.data) {
        saveToken(data.data);
      }
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const accountUser = createAsyncThunk("auth/accountUser", async () => {
  try {
    const token = localStorage.getItem("token");
    const userData = jwtDecode(token);
    console.log(userData, "mmm");

    const { data } = await axiosRequest.get("/UserProfile/get-user-profile-by-id?id=" + userData.sid);

    return data.data;
  } catch (error) {
    console.log(error);
  }
});

export const editAccountUser = createAsyncThunk( "auth/editAccountUser", async (userEditData) => {
    try {
      const token = localStorage.getItem("token");
      const userData = jwtDecode(token);
      console.log("bot",userData);

      const { data } = await axiosRequest.put("/UserProfile/update-user-profile", userEditData);
      return data.data;
    } 
    catch (error) {
      console.log(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(accountUser.fulfilled, (state, action) => {
        state.userData = action.payload;
      })
      .addCase(editAccountUser.fulfilled, (state, action) => {
        state.userData = action.payload;
      })
  },
});

export const { Logout } = authSlice.actions;
export default authSlice.reducer;
