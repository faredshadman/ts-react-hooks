import { ChangeEvent, useReducer } from "react";

const initialState = { count: 0, text: "" };

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}
type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};
const reducer = (
  state: typeof initialState,
  action: ReducerAction
): typeof initialState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return { ...state, text: action.payload! };
    default:
      throw new Error();
  }
};
const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const increment = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
  const decrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: REDUCER_ACTION_TYPE.NEW_INPUT, payload: e.target.value });
  };

  return (
    <>
      Count: {state.count}
      <br />
      Text: {state.text}
      <br />
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <br />
      <input type="text" name="text" onChange={handleChange} />
    </>
  );
};

export default UseReducerHook;
