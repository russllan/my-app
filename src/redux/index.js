import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {carsSliceReducer} from './carsSlice';

const reducers = combineReducers({
    cars: carsSliceReducer
})

export const store = configureStore({
    reducer: reducers
})