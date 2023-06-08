import {configureStore} from '@reduxjs/toolkit'
import PlotReducer from './features/PlotSlice'
import UserReducer from './features/UserSlice'
import VisitorReducer from './features/VisitorSlice'

export default configureStore({
    reducer: {
        plot: PlotReducer,
        user: UserReducer,
        visitor: VisitorReducer
    }
})