import { configureStore } from '@reduxjs/toolkit';
import timerReducer from './Components/TimerDisplay/timerSlice';

export default configureStore({
  reducer: {
    timer: timerReducer,
  },
});