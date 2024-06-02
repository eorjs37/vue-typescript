import axios, { type AxiosInstance } from "axios";

const BASE_URL: string = import.meta.env.VITE_APP_API_URL;

const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 60000
});

export { instance };
