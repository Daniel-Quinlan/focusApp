import React, { useState, useRef, useEffect } from "react";

export default function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  function toggleStopwatch() {
    if (!isRunning) {
      setIsRunning(true);
      startTimeRef.current = Date.now();
      intervalRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current!);
      }, 10);
    } else {
      setIsRunning(false);
      clearInterval(intervalRef.current!);
      intervalRef.current = null;
    }
  }

  return (
    <div className="stopwatch">
      <h1>TIME</h1>
      <div className="time"></div>
      <button onClick={toggleStopwatch} className="stopwatchToggleBtn">
        Start
      </button>
      {/* <button onClick={pauseStopwatch} className="pauseStopWatchBtn">
        Pause
      </button> */}
    </div>
  );
}
