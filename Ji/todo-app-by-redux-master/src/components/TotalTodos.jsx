import React from "react";
import { useSelector } from "react-redux";

const TotalTodos = () => {
  const data = useSelector((state) => state.todoApp.data);
  let completedTodos = data.filter((item) => item.isCompleted && true);

  return (
    <div>
      {data.length && (
        <p>
          <span>{completedTodos.length}</span> completed of{" "}
          <span>{data.length}</span>
        </p>
      )}
    </div>
  );
};

export default TotalTodos;
