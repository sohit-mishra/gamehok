import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://67c9566f0acf98d07089d293.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response.data, 
  (error) => Promise.reject(error)
);


export default api;