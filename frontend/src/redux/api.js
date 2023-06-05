import axios from 'axios'

const API = axios.create({
    baseURL: "http://localhost:6060/api"
})

//get token and pass to create tour endpoint
API.interceptors.request.use((req) => {
    if(localStorage.getItem('user')){
        req.headers.Authorization = `Bearer ${
            JSON.parse(localStorage.getItem('user')).token}`
    }
    return req;
})

//Get all Plots
export const getAllPlots = () => API.get('/plots')

//User login 
export const login = (formValue) => API.post('/login', formValue)