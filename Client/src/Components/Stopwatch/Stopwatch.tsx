import "./Stopwatch.css";
import { useState, useRef, useEffect } from "react";

export default function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current!);
      }, 10);
    }

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        formatTime();
      }
    };
  }, [isRunning]);

  function toggleStopwatch() {
    if (elapsedTime === 0) {
      setIsRunning(true);
      startTimeRef.current = Date.now() - elapsedTime;
      intervalRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current!);
      }, 10);
    } else {
      setIsRunning(false);
      clearInterval(intervalRef.current!);
      intervalRef.current = null;
      setElapsedTime(0);
    }
  }

  function pauseStopwatch() {
    if (isRunning) {
      setIsRunning(false);
      clearInterval(intervalRef.current!);
      intervalRef.current = null;
    } else {
      setIsRunning(true);
      startTimeRef.current = Date.now() - elapsedTime;
      intervalRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current!);
      }, 10);
    }
  }

  function formatTime() {
    const hours = Math.floor(elapsedTime / 3600000);
    const minutes = Math.floor((elapsedTime % 3600000) / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);

    if (minutes < 1) {
      return `${seconds.toString()}s`;
    } else if (hours < 1) {
      return `${minutes.toString()}m`;
    } else {
      return `${hours.toString()}h ${minutes.toString()}m`;
    }
  }
  return (
    <div className="stopwatch">
      <h1>TIME</h1>
      <div className="time">{formatTime()}</div>
      <button onClick={toggleStopwatch} className="stopwatchToggleBtn">
        {elapsedTime === 0 ? "Start" : "Stop"}
      </button>
      <button
        onClick={pauseStopwatch}
        className={`pauseStopWatchBtn ${elapsedTime === 0 ? "hidden" : ""}`}
      >
        {isRunning ? "Pause" : "Resume"}
      </button>
    </div>
  );
}
