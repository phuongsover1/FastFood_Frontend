import axios from "axios";
const axiosInstance = axios.create({
  baseURL: `http://${import.meta.env.VITE_BACKEND_API_URL as string}/api`,
})
export default axiosInstance;