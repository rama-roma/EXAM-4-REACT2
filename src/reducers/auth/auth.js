import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

import axios from "axios";
import { saveToken } from "../../utils/api";

const initialState = {
  data: [],
  user: null,
  token: null,
  userData: null,
};

export const loginUser = createAsyncThunk("auth/loginUser", async (user) => {
  try {
    const { data } = await axios.post(
      "http://37.27.29.18:8002/Account/login",
      user
    );
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
      const { data } = await axios.post(
        "http://37.27.29.18:8002/Account/register",
        user
      );
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

    const { data } = await axios.get(
      "http://37.27.29.18:8002/UserProfile/get-user-profile-by-id?id=" +
        userData.sid,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(data, "user1");
    return data.data;
  } catch (error) {
    console.log(error);
  }
});

export const editAccountUser = createAsyncThunk( "auth/editAccountUser", async (userUpdateData) => {
    try {
      const token = localStorage.getItem("token");

      const userData = jwtDecode(token);
      console.log("bot",userData);

      const { data } = await axios.put(
        "http://37.27.29.18:8002/UserProfile/update-user-profile", userUpdateData, 
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

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
