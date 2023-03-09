import { useState } from "react";

const todos = [];

function Todos() {
  const [newTodo, setNewTodo] = useState("");

  const saveUserInput = (e) => setNewTodo(e.target.value);
  const createTodo = () => {};

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
