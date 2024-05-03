import axios, { type AxiosInstance } from "axios";

const BASE_URL: string = "https://biggunsite.co.kr";

const instance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 60000
});

export { instance };
