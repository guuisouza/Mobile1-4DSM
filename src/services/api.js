import axios from "axis";

const api = axios.create({
    baseURL: "https://api.github.com"
})

export default api;