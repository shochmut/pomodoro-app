import { configureStore } from '@reduxjs/toolkit';
import timerReducer from './Components/TimerDisplay/timerSlice';
import toggleReducer from './Components/TimerDisplay/toggleSlice';
import breakReducer from './Components/breakSlice';

export default configureStore({
  reducer: {
    timer: timerReducer,
    toggle: toggleReducer,
    break: breakReducer,
  },
});