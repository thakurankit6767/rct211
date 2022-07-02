import "./App.css";
import TodoApp from "./components/TodoApp";
import { Route, Routes } from "react-router-dom";
import SingleTodo from "./components/SingleTodo";
import EditTodo from "./components/EditTodo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TodoApp />} />
        <Route path="/todo/:id" element={<SingleTodo />} />
        <Route path="/todo/:id/edit" element={<EditTodo />} />
      </Routes>
    </div>
  );
}

export default App;
