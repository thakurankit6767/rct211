import { useState } from "react";
import "./App.css";
import Counter from "./Components/Counter";

function App() {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 5);
  };

  const handleReduce = () => {
    setCounter(counter - 5);
  };
  return (
    <div className="App">
      <h1 data-testid="counter">{counter}</h1>
      <Counter data-testid="btn" onClickAdd={() => handleAdd()}>ADD</Counter>
      <Counter data-testid="btn" onClickReduce={() => handleReduce()}>REDUCE</Counter>
    </div>
  );
}

export default App;