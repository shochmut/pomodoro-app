import { createSlice } from '@reduxjs/toolkit'

export const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    value: 25,
  },
  reducers: {
    increment: (state) => {
      if (state.value < 60) {
        state.value += 1
      }
    },
    decrement: (state) => {
      if (state.value > 1) {
        state.value -= 1
      }
    },
    reset: (state, action) => {
      state.value = 25
    }
  },
})

export const { increment, decrement, reset } = timerSlice.actions
export const selectTime = (state) => state.timer.value  //selector function definition
export default timerSlice.reducer
