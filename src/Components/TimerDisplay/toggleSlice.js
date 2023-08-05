import { createSlice } from '@reduxjs/toolkit'

export const toggleSlice = createSlice({
  name: 'toggle',
  initialState: {
    value: false,
  },
  reducers: {
    toggleOnOff: (state) => {
      state.value = !state.value
    },
    toggleOff: (state) => {
      state.value = false
    }
  },
})

export const { toggleOnOff, toggleOff } = toggleSlice.actions
export const selectToggle = (state) => state.toggle.value  //selector function definition
export default toggleSlice.reducer
