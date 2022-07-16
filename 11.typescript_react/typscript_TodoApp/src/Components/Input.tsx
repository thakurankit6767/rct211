interface InputTodo {
  handleADDTodo: (title: string) => void;
  setInputValue: (value: string) => void;
  value: string;
}
const Input = ({ handleADDTodo, setInputValue, value }: InputTodo) => {
  const handleOnchange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodoOnClick: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    handleADDTodo(value);
    setInputValue("");
  };
  return (
    <div>
      <input type="text" value={value} onChange={handleOnchange} />
      <button onClick={handleAddTodoOnClick}>ADD</button>
    </div>
  );
};

export default Input;
