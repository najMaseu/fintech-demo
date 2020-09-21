import React, { useContext } from "react";
import { CounterContext } from "../../context/CounterContext";
import { counterWrapper } from "./Counter.styles";

export const Counter = () => {
  const { count, setCount } = useContext(CounterContext);
  return (
    <div className={counterWrapper}>
      <h2>Total: {count}</h2>
      <div>
        <button onClick={() => setCount((prevValue) => prevValue + 1)}>
          +
        </button>
        <button onClick={() => setCount((prevValue) => prevValue - 1)}>
          -
        </button>
      </div>
    </div>
  );
};
