import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count : 0
}

export const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers : {
        increament : (state) => {
            state.count += 1;
        },
        decreament : (state) => {
            state.count -= 1;
        },
        reset : (state) => {
            state.count = 0;
        },
        increamentByAmount : (state, action) => {
            state.count += action.payload;
        }
    }
})

export const {increament,decreament, reset, increamentByAmount} = CounterSlice.actions;
export const selectCount = (state) => state.counter.count;
export default CounterSlice.reducer;