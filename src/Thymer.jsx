import React, { useState, useEffect } from "react";
import styles from "./Thymer.module.css";

/*
  A timer component.
*/
export default function Thymer() {
  let [seconds, setSeconds] = useState(0);
  let [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [running]);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Thymer</h1>

      <p className={styles.tagline}>{seconds} seconds</p>

      <button
        className={styles.button}
        onClick={() => {
          setRunning(!running);
        }}
      >
        {running ? "Stop" : "Start"}
      </button>
    </div>
  );
}
