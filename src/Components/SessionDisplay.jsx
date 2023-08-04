import { useState } from 'react';
import Stack from '@mui/material/Stack';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Box from '@mui/material/Box';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount, selectTime } from './TimerDisplay/timerSlice';

const SessionDisplay = () => {
  const session = useSelector(selectTime)

  return (
    <Stack>
      <p className="session-label">Session Length</p>
      <Stack direction="row">
        <IconButton className="session-increment" color="secondary" onClick={useDispatch(increment())}>
          <ArrowUpwardIcon></ArrowUpwardIcon>
        </IconButton>
        <Box>
          <p className="session-length">{session}</p>
        </Box>
        <IconButton className="session-decrement" color="secondary" onClick={useDispatch(decrement())}>
          <ArrowDownwardIcon></ArrowDownwardIcon>
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default SessionDisplay;
