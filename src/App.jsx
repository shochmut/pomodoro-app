import { useState } from 'react';
import './App.css';
import Stack from '@mui/material/Stack';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import IconButton from '@mui/material/IconButton';


function App() {

  return (
    <>
      <Stack> 
        <p className="break-label">Break Length</p>
        <IconButton className="break-decrement">
          <ArrowDownwardIcon></ArrowDownwardIcon>
        </IconButton>
      </Stack>
      <Stack>
        <p className="session-label">Session Label</p>
      </Stack>
    </>
  )
}

export default App;
