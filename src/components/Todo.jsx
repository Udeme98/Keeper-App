import { useState } from "react";

const Todo = () => {
  const [inputText, setInputText] = useState("");
  const [lists, setLists] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setInputText(e.target.value);
  };

  const submitTodo = () => {
    console.log("submitted");
    setLists((prev) => [...prev, inputText]);
    setInputText("");
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputText} />
        <button onClick={submitTodo}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {lists.map((list) => {
            return <li key={list.id}>{list}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
export default Todo;
