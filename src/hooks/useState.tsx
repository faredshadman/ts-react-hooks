import {
  useState,
  useEffect,
  useCallback,
  MouseEvent,
  KeyboardEvent,
} from "react";
interface IData {
  count: number;
  text: string;
}
interface User {
  id: number;
  username: string;
}
const UseState = () => {
  //   const [number, setNumber] = useState<number | null>(null);
  //   const [users, setUsers] = useState<User[] | null>(null);
  //   const [data, setData] = useState<IData>({ count: 0, text: "" });
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);

  const increment = () => {
    setCount((c) => c + 1);
  };

  useEffect(() => {
    console.log("mounting");
    console.log("Users ", users);
    return () => {
      console.log("unmounting");
    };
  }, [users]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default UseState;
