import React, { useState } from "react";
import styles from "./Counter.module.scss";
const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment} className={styles.button}>
        increment
      </button>
    </div>
  );
};

export default Counter;
