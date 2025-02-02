import axios from "axios";

const Axios = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, // Ensure this is correctly set
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default Axios;
