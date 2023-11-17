import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

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
  const [todo, dispatchTodo] = useReducer(todoReducer, initialState);

  return (
    <>
      <h1>Todo App</h1>
      <hr />

      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
      </ul>
    </>
  );
};
