import axios from "axios";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editTodo } from "../Redux/Todo/todoAction";

const EditTodo = () => {
  const [value, setValue] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToggle = (id) => {
    axios
      .patch(`http://localhost:8080/todos/${id}`, { value: value })
      .then((r) => dispatch(editTodo(r.data)));

    navigate("/");
  };

  return (
    <div>
      <h2>Edit Your Todo Here</h2>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button onClick={() => handleToggle(id)} disabled={!value}>
        Edit & Go to Homepage
      </button>
    </div>
  );
};

export default EditTodo;
