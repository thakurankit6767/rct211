import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import TodoInput from "./Input";
import TodoList from "./List";

export interface TodoData {
  title: string;
  status: boolean;
  id: number;
}

const Todos = () => {
  const [todos, setTodos] = useState<TodoData[]>([]);
  const [value, setValue] = useState<string>("");

  const handleAddTodo = (title: string) => {
    const payload = {
      id: Date.now(),
      title: title,
      status: false,
    };
    axios.post("http://localhost:8080/todos", payload).then((res) => {
      getTodos();
    });
  };

  const ToggleTodo = (todo: TodoData) => {
    axios
      .patch(`http://localhost:8080/todos/${todo.id}`, { status: !todo.status })
      .then((res) => {
        console.log("res:", res);
        getTodos();
      });
  };

  const UpdateTodo = (todo: TodoData) => {
    axios
      .patch(`http://localhost:8080/todos/${todo.id}`, { title: value })
      .then((res) => {
        getTodos();
      });
  };

  const DeleteTodo = (id: number) => {
    axios.delete(`http://localhost:8080/todos/${id}`).then((res) => {
      getTodos();
    });
  };

  const getTodos = () => {
    axios
      .get("http://localhost:8080/todos")
      .then((res: AxiosResponse<TodoData[]>) => {
        const { data } = res;
        setTodos(data);
      });
  };
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput
        value={value}
        setInputValue={setValue}
        handleADDTodo={handleAddTodo}
      ></TodoInput>
      {todos.length > 0 &&
        todos.map((todo) => (
          <TodoList
            HandleToggleTodo={ToggleTodo}
            HandleUpdateTodo={UpdateTodo}
            handleDeleteTodo={DeleteTodo}
            key={todo.id}
            todo={todo}
          ></TodoList>
        ))}
    </div>
  );
};

export default Todos;
