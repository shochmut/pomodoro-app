import { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Box from '@mui/material/Box';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset, selectTime } from './timerSlice';

const TimerDisplay = () => {
  const session = useSelector(selectTime);
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(session);

  const toggle = () => {
    setIsActive(!isActive);
  }

  const handleReset = () => {
    setIsActive(false);
    dispatch(reset({payload: 25}))
    setSeconds(0);
    setMinutes(session);
  }

  useEffect(() => {
    let newInterval = setInterval(() => {
      if (isActive && seconds>0) {
        setSeconds(seconds - 1);
      }
      if (isActive && seconds===0) {
        if (minutes===0) {
          clearInterval(newInterval)
        } else {
          setMinutes(minutes-1);
          setSeconds(59);
          }
        }
      }, 1000)
      return () => {
        clearInterval(newInterval);
      };
  });

  return (
    <Stack>
      <p className="timer-label">Session</p>
      <p className="time-left">{minutes}:{(seconds.toString()).padStart(2, '0')}</p>
      <Stack direction="row" justifyContent="center">
        <IconButton className="start_stop" color="success" onClick={() => toggle()}>
          <PlayCircleFilledIcon></PlayCircleFilledIcon>
        </IconButton>
        <IconButton className="pause" color="primary" onClick={() => setIsActive(false)}>
          <PauseCircleFilledIcon></PauseCircleFilledIcon>
        </IconButton>
        <IconButton className="reset" color="secondary" onClick={() => handleReset()}>
          <RestartAltIcon></RestartAltIcon>
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default TimerDisplay;
