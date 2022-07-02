import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const SingleTodo = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.todoApp.data);
  let thisData = data.filter((item) => item.id === id);

  return (
    <div>
      <h1>Your Todo</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          maxWidth: "300px",
          margin: "auto",
          alignItems: "center",
        }}
      >
        <h3>{thisData[0]?.value}</h3>
        <p>{thisData[0]?.date}</p>
      </div>
      <Link to={`/todo/${id}/edit`}>
        <button>Edit</button>
      </Link>
    </div>
  );
};

export default SingleTodo;
