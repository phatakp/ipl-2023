import axios from "axios";

export default axios.create({
    baseURL: `${import.meta.env.VITE_APP_API_URL}`,
    timeout: 3000,
    withCredentials: true,
});
