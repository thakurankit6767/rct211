import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  deleteTodo,
  getTodoError,
  getTodoSuccess,
  toggleTodo,
} from "../Redux/Todo/todoAction";
import TodoInput from "./TodoInput";
import TotalTodos from "./TotalTodos";

const TodoApp = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todoApp.data);

  useEffect(() => {
    const getTodos = () => {
      axios
        .get(`http://localhost:8080/todos`)
        .then((res) => dispatch(getTodoSuccess(res.data)))
        .catch((err) => dispatch(getTodoError(err)));
    };
    if (data.length === 0) {
      getTodos();
    }
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/todos/${id}`);

    dispatch(deleteTodo(id));
  };

  const handleToggle = (e, id) => {
    let value = e.target.checked;
    axios
      .patch(`http://localhost:8080/todos/${id}`, { isCompleted: value })
      .then((r) => dispatch(toggleTodo(r.data)));
  };

  return (
    <div>
      <TodoInput />
      <TotalTodos/>
      {data.length
        ? data.map((item) => (
            <div
              key={item.id}
              style={{
                width: "200px",
                margin: "auto",
                border: "1px solid",
              }}
            >
              <div>{item.date}</div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={item.isCompleted}
                    onChange={(e) => handleToggle(e, item.id)}
                  />
                  <Link to={`/todo/${item.id}`} style={{ margin: 0 }}>
                    {item.value}
                  </Link>
                </div>
                <button onClick={() => handleDelete(item.id)}>Del</button>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default TodoApp;
