import { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Box from '@mui/material/Box';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount, selectTime } from './timerSlice';

const TimerDisplay = () => {
  const session = useSelector(selectTime)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  return (
    <Stack>
      <p className="timer-label">Session</p>
      <p className="time-left">{session}</p>
    </Stack>
  );
};

export default TimerDisplay;
