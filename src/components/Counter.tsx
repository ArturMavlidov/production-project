import { FC, useState } from "react";
import classes from "./Counter.module.scss";

interface ICounterProps {
  initialValue?: number;
}

export const Counter: FC<ICounterProps> = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      <button className={classes.button} onClick={() => setCount(count - 1)}>
        decrement
      </button>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
};
