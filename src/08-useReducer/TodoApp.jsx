import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks";

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    todosWaiting,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
  } = useTodos();

  return (
    <>
      <h1>
        Todo App: ({todosCount}) <small>Waiting: ({todosWaiting})</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-12 col-md-7">
          <TodoList
            todos={todos}
            onRemoveTodo={handleRemoveTodo}
            onToggleTodo={handleToggleTodo}
          />
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
