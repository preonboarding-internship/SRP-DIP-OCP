import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function Todos() {
  const [newTodo, setNewTodo] = useState("");
  const { todos, create } = useTodo();

  const saveUserInput = (e) => setNewTodo(e.target.value);
  const createTodo = () => {
    create(newTodo);
  };

  return (
    <div>
      <input value={newTodo} onChange={saveUserInput} />
      <button onClick={createTodo}>create</button>
      {todos?.map(({ id, todo }) => (
        <li key={id}>{todo}</li>
      ))}
    </div>
  );
}

export default Todos;
