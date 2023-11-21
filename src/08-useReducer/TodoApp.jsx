import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [];

const init = () => {
  return JSON.parse(sessionStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
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

  return (
    <>
      <h1>
        Todo App: (10) <small>Waiting: (2)</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-12 col-md-7">
          <TodoList todos={todos} onRemoveTodo={handleRemoveTodo} />
        </div>
        <div className="col-12 col-md-5">
          <h4>Add Todo</h4>
          <hr />

          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
