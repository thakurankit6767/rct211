import axios from "axios";
import React from "react";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/Todo/todoAction";
import { useState } from "react";

const TodoInput = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  let date = Date().split(" ");
  let newDate = date[1] + "-" + date[2] + "-" + date[3];

  const handleAdd = () => {
    axios
      .post(`http://localhost:8080/todos`, {
        value: value,
        isCompleted: false,
        date: newDate,
        id: uuid(),
      })
      .then((res) => dispatch(addTodo(res.data)));

    // getTodos();
    setValue("");
  };

  const handlekeyPress = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="EnterTodo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => handlekeyPress(e)}
      />
      <button onClick={handleAdd} disabled={!value}>
        Add
      </button>
    </div>
  );
};

export default TodoInput;
