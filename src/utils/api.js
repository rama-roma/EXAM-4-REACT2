import axios from "axios";

export const API = import.meta.env.VITE_API_URL;


export const axiosRequest = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`
  },
});

export const  axiosInstance = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/json",
  },
});


export const saveToken = (token) => {
  if (token) {
    localStorage.setItem("token", token);
  }
};

export const removeToken = () => {
  localStorage.removeItem("token");
};