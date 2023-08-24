import { useState } from "react";

export default function useIncrement(addAmount) {
  const [count, setCount] = useState(addAmount);
  const increase = () => setCount((x) => x + addAmount);
  return [count, increase];
}
