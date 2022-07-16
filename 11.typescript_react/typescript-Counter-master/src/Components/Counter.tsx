import React, { useState } from "react";
import CounterButton from "./CounterButton";
import AppHeader from "./AppHeader";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCount = (value: number) => {
    setCount(count + value);
  };
  return (
    <div>
      <AppHeader></AppHeader>
      <AppHeader label={`${count}`}></AppHeader>
      <CounterButton
        label="ADD"
        handlePlusCount={() => handleCount(1)}
      ></CounterButton>
      <CounterButton
        label="REDUCE"
        handlePlusCount={() => handleCount(-1)}
      ></CounterButton>
    </div>
  );
};

export default Counter;
