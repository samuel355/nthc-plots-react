import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import * as api from '../api'

const plotSlice = createSlice({
    name: 'plot',
      initialState: {
    plot:{},
    plots: [],
    plotName: '',
    loading: false,
    error: "",
  },

  reducers: {

  },

  extraReducers: (builder)=>{

  }
})


export default plotSlice.reducer; 