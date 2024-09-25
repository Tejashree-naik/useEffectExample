import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  // useEffect with an interval as a side effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); // Empty array as dependency means the effect runs once on mount

  return (
    <div>
      <h1>TIMER: {seconds}s</h1>
    </div>
  );
}

export default Timer;
