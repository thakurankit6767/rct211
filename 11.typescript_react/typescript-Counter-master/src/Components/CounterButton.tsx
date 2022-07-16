import React from "react";

interface Button {
  label: string;
  handlePlusCount: () => void;
}
const CounterButton = ({ label, handlePlusCount }: Button) => {
  return <button onClick={handlePlusCount}>{label}</button>;
};

export default CounterButton;
