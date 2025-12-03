import axios from "axios";

export const API = import.meta.env.VITE_API_KEY;

export const axiosRequest = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAxiosWithToken = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/json",
  },
});

// Интерцептор для автоматического добавления токена
const addTokenToRequest = (config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

axiosRequest.interceptors.request.use(addTokenToRequest);
getAxiosWithToken.interceptors.request.use(addTokenToRequest);

export const saveToken = (token) => {
  if (token) {
    localStorage.setItem("token", token);
    // После сохранения токена нужно обновить заголовки
    // Это произойдет автоматически через интерцепторы
  }
};

export const removeToken = () => {
  localStorage.removeItem("token");
  // Здесь можно также очистить заголовки axios
};