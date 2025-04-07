import React, { useReducer, useState } from "react";
import { counterReducer, initialState } from "../counterReducer";

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const [inputValue, setInputValue] = useState(0);

  return (
    <div>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <h2>Count : {state.count}</h2>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <br />
      <br />
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>

      <div>
        <br />
        <br />
        <br />
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <br />
        <br />
        <button
          onClick={() =>
            dispatch({ type: "incrementByAmount", payload: Number(inputValue) })
          }
        >
          Add
        </button>
        <br />
        <br />
        <button
          onClick={() =>
            dispatch({ type: "decrementByAmount", payload: Number(inputValue) })
          }
        >
          Subtract
        </button>
      </div>
    </div>
  );
};

export default Counter;
