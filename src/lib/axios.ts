import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://api-football-beta.p.rapidapi.com",
    headers: {
        "X-RapidAPI-Key": "25c3ee98f1mshae3c4ea18b2d00bp150122jsn0be47bfd38d5",
        "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com"
    }
});
