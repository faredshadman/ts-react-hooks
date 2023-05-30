import { useState, useCallback, MouseEvent, KeyboardEvent } from "react";
import Button from "../Button";

const UseCallback = () => {
  const [count, setCount] = useState<number>(0);
  const [number, setNumber] = useState<number>(0);
  const addTwo = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => {
      setCount(count + 1);
    },
    [count]
  );

  return (
    <div>
      <h1>{count}</h1>
      <h2>{number}</h2>
      <button onClick={() => setNumber((prev) => prev + 1)}>
        change number
      </button>
      <Button addTwo={addTwo} />
    </div>
  );
};

export default UseCallback;
