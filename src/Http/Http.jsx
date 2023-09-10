import axios from "axios";

const HTTP = axios.create({
    baseURL:import.meta.env.VITE_BASE_URL,
    headers:{
        "Content-Type":"application/json"
    }
})

export const GETAPIData =async (url) => {
    return await HTTP.get(url);

}
