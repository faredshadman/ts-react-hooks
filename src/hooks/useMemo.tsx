import { useMemo, useState } from "react";
type FibFunc = (n: number) => number;
const fibFunc: FibFunc = (n) => {
  if (n < 2) {
    return n;
  }
  return fibFunc(n - 1) + fibFunc(n - 2);
};

const UseMemo = () => {
  const [myNumber, setMyNumber] = useState(3);
  const double = myNumber * 2;
  const fib = useMemo((): number => fibFunc(myNumber), [myNumber]);
  return (
    <div>
      {fib}
      <button onClick={() => setMyNumber((prev) => prev + 1)}>increase</button>
      {double}
    </div>
  );
};

export default UseMemo;
