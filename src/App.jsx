import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  deleteTodo,
} from "./redux/actions/ToDoSlice";

const App = () => {
  const todo = useSelector((state) => state.todo.data);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [id, setId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      return;
    } else {
      setId(id + 1);
      dispatch(addTodo({ id, text }));
    }
    setText("");
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="app">
      <div className="title">
        <h1>To Do List</h1>
      </div>
      {todo.map((item) => (
        <div className="list" key={item.id}>
          <p>{item.text}</p>
          <button onClick={() => handleDelete(item.id)}>
            X
          </button>
        </div>
      ))}
      <form className="input" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default App;
