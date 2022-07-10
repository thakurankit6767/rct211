import React from "react";

const Counter = ({ children, onClickAdd, onClickReduce }) => {
  return (
    <div>
      <button data-testid="btn" onClick={onClickAdd || onClickReduce}>
        {children}
      </button>
    </div>
  );
};

export default Counter;