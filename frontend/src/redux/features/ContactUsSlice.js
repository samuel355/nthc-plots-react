import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import * as api from '../api'

//Sending message through contact  us form
export const contactUs = createAsyncThunk('contactUs', async ({formValue, toast}, {rejectWithValue}) => {
    try{
        const response = await api.contactMsg(formValue)
        
        let details = response.data;
        toast.success(`Thank you ${details?.fullname} for your message, our help desk will get in touch with you shortly.`)
        return response.data;
    }catch(err){
        return rejectWithValue(err.response.data)
    }
})

//Subscribing to news letter
export const subscribeTNL = createAsyncThunk('subscribeTNL', async({email, toast}, {rejectWithValue}) => {
    try {
        const response = await api.subscribeToNewsLetter(email)
        toast.success('Thank you for subscribing to our news letter')
        return response.data;
        
    } catch (error) {
        return rejectWithValue(error.response.data) 
    }
})

const contactUsSlice = createSlice({
    name: 'mail',
    initialState:{
        contactDetails: {},
        newsLetter:{},
        loading: false,
        error: ''
    },

    reducers:{

    },
    
    extraReducers: (builder) => {
        //Contact us via form cycle
        builder
            .addCase(contactUs.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(contactUs.fulfilled, (state, action) => {
            state.loading = false;
            state.contactDetails = action.payload
        })
        .addCase(contactUs.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message
        });

        //Subscribe to news letter cycle
        builder
            .addCase(subscribeTNL.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(subscribeTNL.fulfilled, (state, action) => {
            state.loading = false;
            state.newsLetter = action.payload
        })
        .addCase(subscribeTNL.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload.message
        });
    }
    
})

export default contactUsSlice.reducer;