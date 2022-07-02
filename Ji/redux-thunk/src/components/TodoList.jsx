import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../redux/action";

const TodoList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    if (!data.length) {
      dispatch(getTodos());
    }
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      {data?.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-around",
            border: "1px solid",
            alignItems: "center",
            width: "300px",
            margin: "auto",
          }}
        >
          <p style={{ margin: 0 }}>{item.id}</p>
          <h4 style={{ margin: 0 }}>{item.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
