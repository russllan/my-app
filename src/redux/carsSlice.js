import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Api from '../api/Api'

export const fetchCars = createAsyncThunk('cars/setCars', async () => {
    const response = await Api.getCars();
    return response.data
})

const carsSlice = createSlice({
    name: 'cars',
    initialState: { data: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCars.fulfilled, (state, action) => {
            state.data = action.payload
        })
    }
})

export const carsSliceAction = carsSlice.actions;
export const carsSliceReducer = carsSlice.reducer;

