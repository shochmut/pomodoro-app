import { useState } from 'react';
import Stack from '@mui/material/Stack';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Box from '@mui/material/Box';

const SessionDisplay = () => {
  const [sessionLength, setSessionLength] = useState(25);

  const handleIncrement = () => {
    setSessionLength(sessionLength+1);
  }

  const handleDecrement = () => {
    setSessionLength(sessionLength-1);
  }

  return (
    <Stack>
      <p className="session-label">Session Length</p>
      <Stack direction="row">
        <IconButton className="session-increment" color="secondary" onClick={handleIncrement}>
          <ArrowUpwardIcon></ArrowUpwardIcon>
        </IconButton>
        <Box>
          <p className="session-length">{sessionLength}</p>
        </Box>
        <IconButton className="session-decrement" color="secondary" onClick={handleDecrement}>
          <ArrowDownwardIcon></ArrowDownwardIcon>
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default SessionDisplay;
