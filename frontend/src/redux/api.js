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

//Visitor send interests 
export const sendInterest = (formValue) => API.post('/interests', formValue)

//Update Plot
export const plotUpdate = (id, plotDetails) => API.patch(`plot/updates/${id}`, plotDetails)

//Send Message through contact form 
export const contactMsg = (formValue) => API.post('/contact-us', formValue)

//Subscribe to news letter
export const subscribeToNewsLetter = (email) => API.post('/subscribe-news-letter', email)