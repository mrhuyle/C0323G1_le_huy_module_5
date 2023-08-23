import React from "react";
import useIncrement from "../hooks/useIncrement";

function Counter1() {
  const [count1, increase1] = useIncrement(1);
  return (
    <>
      <div>Count: {count1}</div>
      <button onClick={increase1}>Add 1</button>
    </>
  );
}
export default Counter1;
