import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../redux/action";

const Todoinput = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addTodos({ value: value, status: false }));
    setValue("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => handleKeyPress(e)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Todoinput;
