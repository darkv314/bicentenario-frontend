import axios from "axios";

const isDev = import.meta.env.VITE_ENV === "dev";
const API_URL = isDev ? "http://localhost:1337" : import.meta.env.VITE_API_URL;

export const axiosInstance = axios.create({
    baseURL: `${API_URL}/api`,
});
