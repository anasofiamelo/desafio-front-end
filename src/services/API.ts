import axios from 'axios';

const API = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/volumes"
})

export default API;