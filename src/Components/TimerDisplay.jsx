import { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Box from '@mui/material/Box';

const TimerDisplay = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  
  const toggle = () => {
    setIsActive(!isActive);
  }

  const reset = () => {
    setSeconds(0);
    setIsActive(false);
  }
  
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);



  return (
    <Stack>
      <p className="timer-label">Session</p>
      <p className="time-left">{seconds}</p>
    </Stack>
  );
};

export default TimerDisplay;
