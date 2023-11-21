import PropTypes from "prop-types";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, onRemoveTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
};
