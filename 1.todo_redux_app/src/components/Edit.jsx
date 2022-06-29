import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  updateTodoFailure,
  updateTodoLoading,
  updateTodoSuccess,
} from "../redux/action";

export const Edit = () => {
  const { id } = useParams();
  const todos = useSelector((state) => state.todo);
  const [edit, setEdit] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    setEdit(e.target.value);
  };
  const handleUpdate = (id) => {
    dispatch(updateTodoLoading());
    axios
      .patch(`http://localhost:8080/todos/${id}`, {
        task: edit,
      })
      .then((result) => {
        dispatch(updateTodoSuccess(result.data));

        navigate("/");
      })
      .catch((e) => dispatch(updateTodoFailure()));
  };
  return (
    <div>
      <input type="text" placeholder="edit task here" onChange={handleEdit} />
      <button onClick={() => handleUpdate(id)}>Change</button>
    </div>
  );
};
