import { API_BASE_URL } from "./constants";
import axios from "axios";

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
