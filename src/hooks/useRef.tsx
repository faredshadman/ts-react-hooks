import { useRef, useState } from "react";

const UseRefHook = () => {
  const [render, setRender] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);

  return (
    <div>
      UseRefHook
      <input type="text" ref={inputRef} />
      <button onClick={() => setRender((prev) => !prev)}>Toggle</button>
    </div>
  );
};

export default UseRefHook;
