import React from "react";
import { useRef } from "react";
import { useState } from "react";
import Card from "./Card";

const CardInput = ({ length, setCardValueHandler }) => {
  const [cardValueInput, setCardValueInput] = useState(
    new Array(length).fill("")
  );
  const [cardBoxValue] = useState(new Array(length).fill(1));
  const cardRefe = useRef([]);

  const handleCardValueInput = (el, index) => {
    let value = el.target.value;
    cardValueInput[index] = value;
    setCardValueInput(cardValueInput);

    if (value.length === 5 && index < length - 1) {
      cardRefe.current[index + 1].focus();
    }
    if (value.length === 5) {
      cardRefe.current[index].className = "pink";
    }
    if (value.length < 5) {
      cardRefe.current[index].className = "blue";
    }
  };

  const handleToBackSpace = (el, index) => {
    let value = el.target.value;

    if (value.length === 0 && index > 0) {
      cardRefe.current[index - 1].focus();
    }
    if (value.length < 5) {
      cardRefe.current[index].className = "blue";
    }

    cardValueInput[index] = value;
    setCardValueInput(cardValueInput);
    setCardValueHandler("");
  };

  const handleSubmitValue = () => {
    for (let i = 0; i < length; i++) {
      if (cardRefe.current[i].value.length !== 5) {
        return cardRefe.current[i].focus();
      }
    }
    return setCardValueHandler(cardValueInput.join("-"));
  };

  return (
    <>
      <div className="cardInputclass">
        {cardBoxValue.map((item, index) => (
          <Card
            key={index}
            changeHandler={(el) => handleCardValueInput(el, index)}
            backSpaceHandler={(el) => handleToBackSpace(el, index)}
            ref={(ele) => {
              cardRefe.current[index] = ele;
            }}
          />
        ))}
      </div>
      <button onClick={handleSubmitValue}>Submit</button>
    </>
  );
};

export default CardInput;
