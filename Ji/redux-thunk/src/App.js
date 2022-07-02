import "./App.css";
import SingleTodo from "./components/SingleTodo";
import Todos from "./components/Todos";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/:id" element={<SingleTodo />} />
      </Routes>
    </div>
  );
}

export default App;
