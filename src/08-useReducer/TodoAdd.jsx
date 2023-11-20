import { useForm } from "../hooks/useForm";
import PropTypes from "prop-types";

export const TodoAdd = ({ onNewTodo }) => {
  const { formState, handleInput } = useForm({
    title: "",
    body: "",
  });

  const { title, body } = formState;

  const handleNewTodo = (e) => {
    e.preventDefault();
    if (title.length < 1) return;

    const newTodo = {
      ...formState,
      id: new Date().getTime(),
      done: false,
    };

    return onNewTodo(newTodo);
  };

  return (
    <form onSubmit={handleNewTodo}>
      <div className="d-flex gap-2">
        <input
          type="text"
          name="title"
          placeholder="title"
          className="form-control"
          value={title}
          onChange={handleInput}
        />
        <input
          type="text"
          name="body"
          placeholder="body"
          className="form-control"
          value={body}
          onChange={handleInput}
        />
      </div>
      <button type="submit" className="btn btn-outline-primary mt-2">
        Add todo
      </button>
    </form>
  );
};
TodoAdd.propTypes = {
  onNewTodo: PropTypes.func,
};
