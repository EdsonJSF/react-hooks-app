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
      <h1>
        Todo App: (10) <small>Waiting: (2)</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-12 col-md-7">
          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span>Item 1</span>
              <button className="btn btn-danger">Del</button>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span>Item 2</span>
              <button className="btn btn-danger">Del</button>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span>Item 3</span>
              <button className="btn btn-danger">Del</button>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-5">
          <h4>Add Todo</h4>
          <hr />

          <form>
            <input type="text" placeholder="body" className="form-control" />
            <button type="submit" className="btn btn-outline-primary mt-1">
              Add todo
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
