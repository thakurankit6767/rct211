import React from "react";

const Slider = ({
  children,
  handleOnClickIncriment,
  handleOnClickDecriment,
  disabledPrevious,
  disabledNext,
}) => {
  return (
    <div>
      <button
        data-testid="btn"
        disabled={disabledPrevious || disabledNext}
        onClick={handleOnClickIncriment || handleOnClickDecriment}
      >
        {children}
      </button>
    </div>
  );
};

export default Slider;