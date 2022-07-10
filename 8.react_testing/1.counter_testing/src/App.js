import { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";

function App() {
  const [counter, setCounter] = useState(0);

  const handlePlus = () => {
    setCounter(counter + 5);
  };

  const handleMinus = () => {
    setCounter(counter - 5);
  };
  return (
    <div className="App">
      <h1 data-testid="counter">{counter}</h1>
      <Counter data-testid="btn" onClickAdd={() => handlePlus()}>ADD</Counter>
      <Counter data-testid="btn" onClickReduce={() => handleMinus()}>REDUCE</Counter>
    </div>
  );
}

export default App;