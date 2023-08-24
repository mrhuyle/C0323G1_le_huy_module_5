import React from "react";
import useIncrement from "../hooks/useIncrement";

function CounterTwo() {
  const [countTwo, increaseTwo] = useIncrement(2);
  return (
    <>
      <div>Count: {countTwo}</div>
      <button onClick={increaseTwo}>Add 2</button>
    </>
  );
}
export default CounterTwo;
