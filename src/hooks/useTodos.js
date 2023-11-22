import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];

const init = () => {
  return JSON.parse(sessionStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    sessionStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add todo",
      payload: todo,
    };

    dispatchTodo(action);
  };

  const handleRemoveTodo = (id) => {
    const action = {
      type: "[TODO] Remove todo",
      payload: id,
    };

    dispatchTodo(action);
  };

  const handleToggleTodo = (id) => {
    const action = {
      type: "[TODO] Toggle todo",
      payload: id,
    };

    dispatchTodo(action);
  };

  return {
    todos,
    todosCount: todos.length,
    todosWaiting: todos.filter((todo) => !todo.done).length,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
  };
};
