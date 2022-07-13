import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value !== 0) state.value -= 1;
    },

    incrementByAmout: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { incremented, decrement, incrementByAmout } = counterSlice.actions;
export default counterSlice.reducer;
