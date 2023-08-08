import { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset, selectTime } from './timerSlice';
import { toggleOnOff, toggleOff, selectToggle } from './toggleSlice';
import { resetBreak, selectBreak } from '../breakSlice'


const TimerDisplay = () => {
  const session = useSelector(selectTime);
  const breakTime = useSelector(selectBreak);
  const dispatch = useDispatch();
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(session);
  const [sessionCompleted, setSessionCompleted] = useState(false);
  const isActive = useSelector(selectToggle);
  const audio = new Audio('https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'); 

  const handleReset = () => {
    dispatch(toggleOff());
    dispatch(reset());
    dispatch(resetBreak());
    setSeconds(0);
    setMinutes(25);
    setSessionCompleted(false);
    audio.pause()
    audio.currentTime = 0;
  }

  useEffect(() => {
    let newInterval = setInterval(() => {
      if (isActive && seconds>0) {
        setSeconds(seconds - 1);
      }
      if (isActive && seconds===0) {
        if (minutes===0) {
          clearInterval(newInterval);
          setSeconds(0);
          setMinutes(breakTime) ;
          setSessionCompleted(!sessionCompleted);
          audio.play();
        } else {
          setMinutes(minutes-1);
          setSeconds(59);
          }
        }
      }, 100)
      return () => {
        clearInterval(newInterval);
      };
  });

  useEffect(() => {
    setMinutes(session)
  }, [session])

  return (
    <Stack>
      {sessionCompleted
        ? <p className="timer-label">Break</p> 
        :  <p className="timer-label">Session</p>
      }
      <p className="time-left">{(minutes.toString()).padStart(2, '0')}:{(seconds.toString()).padStart(2, '0')}</p>
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
