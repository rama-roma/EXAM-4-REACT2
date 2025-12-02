import axios from "axios";

export  const API = import.meta.env.VITE_API_KEY;


export const axiosRequest = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});



export const getAxiosWithToken = axios.create({
    baseURL: API,   
    headers: {
      "Content-Type": "application/json",
      },
  });


export const saveToken = (data) => {
    if (data && data) {
        localStorage.setItem("token", data);
    }
};

// // export const removeToken = () => {
// //   localStorage.removeItem("token");
// // };
