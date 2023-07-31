import { useState } from 'react';
import Stack from '@mui/material/Stack';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Box from '@mui/material/Box';

const BreakDisplay = () => {
  const [breakLength, setBreakLength] = useState(5);

  const handleIncrement = () => {
    setBreakLength(breakLength + 1);
  };

  const handleDecrement = () => {
    setBreakLength(breakLength - 1);
  };

  return (
    <Stack>
      <p className="break-label">Break Length</p>
      <Stack direction="row">
        <IconButton
          className="break-increment"
          color="secondary"
          onClick={handleIncrement}
        >
          <ArrowUpwardIcon></ArrowUpwardIcon>
        </IconButton>
        <Box>
          <p className="break-length">{breakLength}</p>
        </Box>
        <IconButton
          className="break-decrement"
          color="secondary"
          onClick={handleDecrement}
        >
          <ArrowDownwardIcon></ArrowDownwardIcon>
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default BreakDisplay;
