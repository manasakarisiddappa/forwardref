import React, { useEffect, useRef, useState } from "react";

const Autoincrementcounter = () => {
  const [counter, setCounter] = useState(0);
  const [pause, setPause] = useState(false);
  const interval = useRef(null);

  useEffect(() => {
    console.log("mounting");
    startTimer();
    return () => {
      if (interval.current) clearInterval(interval.current);
    };
  }, []);

  const startTimer = () => {
    interval.current = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 100);
    if (pause) setPause(!pause);
    console.log(interval);
  };

  const stopTimer = () => {
    clearInterval(interval.current);
    setPause(!pause);
  };

  const resetTimer = () => {
    clearInterval(interval.current);
    setPause(!pause);
    setCounter(0);
  };

  return (
    <div>
      <h1>Counter</h1>
      <div>{counter}</div>
      <div>
        <button onClick={pause ? startTimer : stopTimer}>
          {pause ? "start" : "stop"}
        </button>
      </div>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Autoincrementcounter;
