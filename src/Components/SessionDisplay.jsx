import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Box from '@mui/material/Box';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset, selectTime, } from './TimerDisplay/timerSlice';
import { selectToggle } from './TimerDisplay/toggleSlice';

const SessionDisplay = () => {
  const session = useSelector(selectTime)
  const toggle = useSelector(selectToggle)
  const dispatch = useDispatch()

  const handleIncrement = () => {
    if (toggle===false) {
      dispatch(increment())
    }
  }

  const handleDecrement = () => {
    if (toggle===false) {
      dispatch(decrement())
    }
  }

  return (
    <Stack>
      <p className="session-label">Session Length</p>
      <Stack direction="row">
        <IconButton className="session-increment" color="secondary" onClick={() => handleIncrement()}>
          <ArrowUpwardIcon></ArrowUpwardIcon>
        </IconButton>
        <Box>
          <p className="session-length">{session}</p>
        </Box>
        <IconButton className="session-decrement" color="secondary" onClick={() => handleDecrement()}>
          <ArrowDownwardIcon></ArrowDownwardIcon>
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default SessionDisplay;
