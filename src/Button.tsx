import { MouseEvent, KeyboardEvent, FC, memo } from "react";
interface IProps {
  addTwo: (
    e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
  ) => void;
}

const Button: FC<IProps> = ({ addTwo }) => {
  console.log("rendering button");
  return <button onClick={addTwo}>Add Two</button>;
};

export default memo(Button);
