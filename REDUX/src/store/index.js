//import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    incrementOfFive(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});
export const counterActions = counterSlice.actions;
// const counterReducer = (state = intialvariable, action) => {
//   if (action.type === "increment") {
//     return { counter: state.counter + 1, showCounter: true };
//   }

//   if (action.type === "incrementOfFive") {
//     return { counter: state.counter + action.amount, showCounter: true };
//   }

//   if (action.type === "decrement") {
//     return { counter: state.counter - 1, showCounter: true };
//   }

//   if (action.type === "toggle") {
//     return { counter: state.counter, showCounter: !state.showCounter };
//   }
//   return state;
// };

// const store = createStore(counterReducer);

export default store;
