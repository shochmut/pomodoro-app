import { useState } from 'react';
import Stack from '@mui/material/Stack';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Box from '@mui/material/Box';
import { incrementBreak, decrementBreak, resetBreak, selectBreak } from './breakSlice';
import { useSelector, useDispatch } from 'react-redux';


const BreakDisplay = () => {
  const breakTime = useSelector(selectBreak);
  const dispatch = useDispatch();

  return (
    <Stack>
      <p className="break-label">Break Length</p>
      <Stack direction="row">
        <IconButton
          className="break-increment"
          color="secondary"
          onClick={() => dispatch(incrementBreak())}
        >
          <ArrowUpwardIcon></ArrowUpwardIcon>
        </IconButton>
        <Box>
          <p className="break-length">{breakTime}</p>
        </Box>
        <IconButton
          className="break-decrement"
          color="secondary"
          onClick={() => dispatch(decrementBreak())}
        >
          <ArrowDownwardIcon></ArrowDownwardIcon>
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default BreakDisplay;
