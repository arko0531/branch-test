import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0 };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },

        decrement(state) {
            state.counter--;
        },

        inputCounter(state, actions) {
            state.counter = actions.payload;
        }
    }
})

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;