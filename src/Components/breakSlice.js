import { createSlice } from '@reduxjs/toolkit'

export const breakSlice = createSlice({
  name: 'break',
  initialState: {
    value: 5,
  },
  reducers: {
    incrementBreak: (state) => {
      state.value += 1
    },
    decrementBreak: (state) => {
      state.value -= 1
    },
    resetBreak: (state, action) => {
      state.value = 5
    }
  },
})

export const { incrementBreak, decrementBreak, resetBreak } = breakSlice.actions
export const selectBreak = (state) => state.break.value  //selector function definition
export default breakSlice.reducer
