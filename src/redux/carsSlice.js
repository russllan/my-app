import { createSlice } from "@reduxjs/toolkit";
import { data } from "../constants/productPage/data";

const getCarsFromLocalStorage = () => {
    const storedCars = localStorage.getItem('cars');
    return storedCars ? JSON.parse(storedCars) : data;
  };
  
  const updateCarsInLocalStorage = (newCars) => {
    localStorage.setItem('cars', JSON.stringify(newCars));
  };

const carsSlice = createSlice({
  name: "cars",
  initialState: { data: getCarsFromLocalStorage(), id: "", date: "", fio: "", paw: "" },
  reducers: {
    setCars: (state, actions) => {
      state.data.push(actions.payload);
      updateCarsInLocalStorage(state.data);
    },
    deleteCars: (state, actions) => {
        const carIdToRemove = actions.payload;
        state.data = state.data.filter(car => car.id !== carIdToRemove);
        updateCarsInLocalStorage(state.data);
    },
    setId: (state, actions) => {
      state.id = actions.payload;
    },
    setDate: (state, actions) => {
      state.date = actions.payload;
    },
    setFio: (state, actions) => {
      state.fio = actions.payload;
    },
    setPaw: (state, actions) => {
      state.paw = actions.payload;
    },
  },
});

export const carsSliceAction = carsSlice.actions;
export const carsSliceReducer = carsSlice.reducer;
