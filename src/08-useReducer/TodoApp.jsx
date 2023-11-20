import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [
  {
    id: new Date().getTime(),
    title: "Recolectar la piedra del Alma",
    body: "Buscarla y guardarla",
    done: false,
  },
  {
    id: new Date().getTime() + 1,
    title: "Recolectar la piedra del Poder",
    body: "Buscarla y guardarla",
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState);

  const handleNewTodo = (formTodo) => {
    console.log(formTodo);
  };

  return (
    <>
      <h1>
        Todo App: (10) <small>Waiting: (2)</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-12 col-md-7">
          <TodoList todos={todos} />
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
