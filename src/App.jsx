import './App.css';
import Stack from '@mui/material/Stack';
import BreakDisplay from "./Components/BreakDisplay.jsx";
import SessionDisplay from './Components/SessionDisplay.jsx';
import TimerDisplay from './Components/TimerDisplay/TimerDisplay.jsx';


function App() {

  return (
    <>
      <h1>Pomodoro</h1>
      <Stack direction="row" gap={5}>
        <BreakDisplay></BreakDisplay>
        <SessionDisplay></SessionDisplay>
      </Stack>
      <TimerDisplay></TimerDisplay>

    </>
  )
}

export default App;
