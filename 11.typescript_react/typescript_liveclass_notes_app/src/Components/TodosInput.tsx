import React, { useState } from 'react'

interface ITodosInputProps {
    onHandleClick: (value : string) => void;
}
const TodosInput = ({onHandleClick} : ITodosInputProps) => {
    const [text, setText] = useState<string>("")

    const changeHandler : React.
    ChangeEventHandler<HTMLInputElement> = (e) => {
        setText(e.target.value)
    }

    const handleAdd: React.MouseEventHandler<HTMLButtonElement> = () => {
        onHandleClick(text);
    }

  return (
    <div>
        <input type={"text"} value={text} onChange={changeHandler} />
        <button onClick={handleAdd}>ADD</button>
    </div>
  )
}

export default TodosInput