import axios from "axios";


const token = localStorage.getItem("token")
export const instance = axios.create({
    baseURL: `http://localhost:3000`,
    headers: {
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}`: null
    }
    
})