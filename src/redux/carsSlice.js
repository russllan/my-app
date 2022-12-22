import {createSlice} from '@reduxjs/toolkit';
import { data } from '../constants/productPage/data';

const carsSlice = createSlice({
    name: 'cars',
    initialState: { data: data, id:'', date: '', fio:'', paw:''},
    reducers: {
        setCars: (state,actions) => {
            state.data = actions.payload
        },
        setId: (state,actions) => {
            state.id = actions.payload
        },
        setDate: (state,actions) => {
            state.date = actions.payload
        },
        setFio: (state, actions) => {
            state.fio = actions.payload
        },
        setPaw: (state,actions) => {
            state.paw = actions.payload
        }
    }
})

export const carsSliceAction = carsSlice.actions;
export const carsSliceReducer = carsSlice.reducer;
