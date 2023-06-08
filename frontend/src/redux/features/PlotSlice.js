import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import * as api from '../api'


//fetch all plots
export const getPlots = createAsyncThunk("/plots", async (_, {rejectWithValue}) => { 
  try {
    const response = await api.getAllPlots()
    return response.data;
} catch (error) {
    console.log(error)
    return rejectWithValue(error.response.data)
  }
})

//Update Plot
export const updatePlot = createAsyncThunk("/plot/update", async ({id, toast, navigate, status, plotDetails, fullName, email, country, phone, address, agent, totalAmount, paidAmount, remainingAmount}, {rejectWithValue}) => {
  try {
    const response = await api.plotUpdate(id, {status, fullName, plotDetails, phone, email, country, address, agent, totalAmount, paidAmount, remainingAmount})
    toast.success('Plot Updated Successfully')
    //navigate('/purchase')
    return response.data;
    
  } catch (error) {
    console.log(error)
    return rejectWithValue(error.response.data)
  }
})


const plotSlice = createSlice({
    name: 'plot',
    initialState: {
    plot:{},
    plots: [],
    plotName: '',
    plotID: null,
    loading: false,
    error: "",
  },

  reducers: {
    getPlotName : (state, action) => {
      const plotName = state.plots.find((plot) => plot._id === action.payload)
      if (plotName){
        state.plotID = plotName._id;
        state.plotName = plotName.properties.Plot_Detail;
      }else{
        console.log('Error Ocurred')
      }
    },
  },

  extraReducers: (builder) => {
    //Fetch All plots
    builder
      .addCase(getPlots.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getPlots.fulfilled, (state, action) => {
        state.loading = false;
        state.plots = action.payload
        state.plot = {}
      })
      .addCase(getPlots.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message
      })

    //Update Plot Cycle
      builder
       .addCase(updatePlot.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updatePlot.fulfilled, (state, action) => {
        state.loading = false;
        
        // const {arg: {id},} = action.meta
        // if(id){
        //   state.plots = state.plots.map((item) => item._id === id ? action.payload : item)
        // }

        const plotIndex = state.plots.findIndex((plot)=> plot._id === action.payload._id);
        state.plots[plotIndex] = action.payload;

        state.error = action.payload.message;
      })
      .addCase(updatePlot.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
    
  }
})


export const {getPlotName} = plotSlice.actions
export default plotSlice.reducer; 