import React from "react";
import useIncrement from "../hooks/useIncrement";

function Counter2() {
  const [count2, increase2] = useIncrement(2);
  return (
    <>
      <div>Count: {count2}</div>
      <button onClick={increase2}>Add 2</button>
    </>
  );
}
export default Counter2;
