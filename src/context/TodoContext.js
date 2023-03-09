import { useState, createContext, useContext, useEffect } from "react";

const TodoContext = createContext(null);

export const useTodo = () => useContext(TodoContext);

export const TodoProvider = ({ children, todoService }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    todoService.get().then(setTodos);
  }, [todoService, setTodos]);

  const create = async (newTodo) => {
    const todo = await todoService.create(newTodo);
    setTodos([...todos, todo]);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        create,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
