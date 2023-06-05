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
      getPlotName : (state, action) => {
        const plotName = state.plots.find((plot) => plot._id === action.payload)
        if (plotName){
          state.plotName = `Plot Number ${plotName.properties.Plot_No}  ${plotName.properties.Street_Nam} `;
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
  }
})


export const {getPlotName} = plotSlice.actions
export default plotSlice.reducer; 