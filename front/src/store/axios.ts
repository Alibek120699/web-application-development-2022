import axios from "axios";

export const request = axios.create({
  baseURL: "http://localhost:5173",
});

const token = localStorage.getItem("token");
if (token) {
  request.interceptors.request.use((config) => {
    if (config?.headers) {
      config.headers["auth-token"] = token;
    }
    return config;
  });
}
