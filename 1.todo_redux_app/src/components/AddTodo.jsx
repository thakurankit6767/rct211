import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  postTodoFailure,
  postTodoLoading,
  postTodoSuccess,
} from "../redux/action";

export const AddTodo = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const addData = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    dispatch(postTodoLoading());
    axios
      .post("http://localhost:8080/todos", {
        task: task,
        taskStatus: false,
      })
      .then((result) => dispatch(postTodoSuccess(result.data)))
      .catch((e) => dispatch(postTodoFailure()));
    setTask("");
  };

  return (
    <div>
      <input type="text" name="addData" value={task} onChange={addData} />
      <button onClick={addTask}>ADD TODO</button>
    </div>
  );
};
