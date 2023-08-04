import { createSlice } from '@reduxjs/toolkit'

export const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    value: 20
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  },
})

export const { increment, decrement, incrementByAmount } = timerSlice.actions
export const selectTime = state => state.timer.value  //selector function definition
export default timerSlice.reducer
