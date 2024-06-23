import { useState, useEffect } from "react";
import "./Footer.css";

const Footer = ({ count, setCount }) => {
  const [timerState, setTimerState] = useState('stopped');
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    if (count === 0) {
      clearInterval(timerId);
      setTimerState('stopped');
    }
  }, [count, timerId]);

  const handleButtonClick = () => {
    if (timerState === 'stopped' || timerState === 'paused') {
      setTimerState('running');
      const newTimerId = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount <= 1) {
            clearInterval(newTimerId);
            return 0;
          }
          return prevCount - 1;
        });
      }, 1000);
      setTimerId(newTimerId);
    } else if (timerState === 'running') {
      clearInterval(timerId);
      setTimerState('paused');
    }
  };

  const getButtonText = () => {
    if (timerState === 'running') {
      return 'Pause Timer';
    } else if (timerState === 'paused') {
      return 'Resume Timer';
    } else {
      return 'Start Timer';
    }
  };

  return (
    <div className="action_handler">
      <button className="button" onClick={handleButtonClick}>{getButtonText()}</button>
    </div>
  );
};

export default Footer;