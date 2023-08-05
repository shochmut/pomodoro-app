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
import { toggleOnOff, toggleOff, selectToggle } from './toggleSlice';

const TimerDisplay = () => {
  const session = useSelector(selectTime);
  const dispatch = useDispatch();
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(session);
  const isActive = useSelector(selectToggle);

  const handleReset = () => {
    dispatch(toggleOff());
    dispatch(reset());
    setSeconds(0);
    setMinutes(25);
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

  useEffect(() => {
    setMinutes(session)
  }, [session])

  return (
    <Stack>
      <p className="timer-label">Session</p>
      <p className="time-left">{minutes}:{(seconds.toString()).padStart(2, '0')}</p>
      <Stack direction="row" justifyContent="center">
        <IconButton className="start_stop" color="success" onClick={() => dispatch(toggleOnOff())}>
          <PlayCircleFilledIcon></PlayCircleFilledIcon>
        </IconButton>
        <IconButton className="pause" color="primary" onClick={() => dispatch(toggleOff())}>
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
