import React, { useReducer, useEffect } from "react";

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  const { count, step } = state;

  switch (action.type) {
    case "increment":
      return { count: count + 1, step };
    case "decrement":
      return { count: count - 1, step };
    case "tick":
      return { count: count + step, step };
    case "step":
      return { count, step: action.step };
    default:
      throw new Error();
  }
}

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <input type="number" value={state.step} onChange={e => {
          dispatch({
              type: "step",
              step: Number(e.target.value)
          })
      }} />
    </>
  );
};
