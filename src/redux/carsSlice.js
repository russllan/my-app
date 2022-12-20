import {createSlice} from '@reduxjs/toolkit';
import { data } from '../constants/productPage/data';

const carsSlice = createSlice({
    name: 'cars',
    initialState: { data: data },
    reducers: {
        setCars: (state,actions) => {
            state.data = actions.payload
        }
    }
})

export const carsSliceAction = carsSlice.actions;
export const carsSliceReducer = carsSlice.reducer;
