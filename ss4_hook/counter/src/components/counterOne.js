import React from "react";
import useIncrement from "../hooks/useIncrement";

function CounterOne() {
  const [countOne, increaseOne] = useIncrement(1);
  return (
    <>
      <div>Count: {countOne}</div>
      <button onClick={increaseOne}>Add 1</button>
    </>
  );
}
export default CounterOne;
