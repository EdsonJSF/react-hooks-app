import PropTypes from "prop-types";

export const TodoItem = ({ todo, onRemoveTodo, onToggleTodo }) => {
  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center ${
        todo.done ? "bg-success text-white" : ""
      }`}
    >
      <span onDoubleClick={() => onToggleTodo(todo.id)}>
        {todo.title} - <small>{todo.body}</small>
      </span>
      <button className="btn btn-danger" onClick={() => onRemoveTodo(todo.id)}>
        Del
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};
