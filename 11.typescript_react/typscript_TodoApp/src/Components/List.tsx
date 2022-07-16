import React from "react";
import { TodoData } from "./Todos";

interface List {
  todo: TodoData;
  HandleToggleTodo: (todo: TodoData) => void;
  HandleUpdateTodo: (todo: TodoData) => void;
  handleDeleteTodo: (id: number) => void;
}

const List = ({
  todo,
  HandleToggleTodo,
  HandleUpdateTodo,
  handleDeleteTodo,
}: List) => {
  const ToggleADDTodo: React.MouseEventHandler<HTMLButtonElement> = () => {
    HandleToggleTodo(todo);
  };

  const UpdateTodo: React.MouseEventHandler<HTMLButtonElement> = () => {
    HandleUpdateTodo(todo);
  };

  const DeleteTodo: React.MouseEventHandler<HTMLButtonElement> = () => {
    handleDeleteTodo(todo.id);
  };
  return (
    <div
      style={{
        border: "2px solid",
        width: "fit-content",
        margin: "auto",
        marginTop: "16px",
        padding: "11px",
      }}
    >
      <h4>{todo.title}</h4>
      {todo.status ? "Completed" : "notCompleted"}
      <div style={{ display: "flex", gap: "11px", marginTop: "11px" }}>
        <button onClick={ToggleADDTodo}>Toggle</button>
        <button onClick={UpdateTodo}>Update</button>
        <button onClick={DeleteTodo}>Delete</button>
      </div>
    </div>
  );
};

export default List;
