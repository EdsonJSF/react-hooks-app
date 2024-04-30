import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../../src/08-useReducer/TodoItem";

describe("Test on <TodoItem />", () => {
  const todo = {
    id: 1,
    title: "Soul Stone",
    body: "Get the Soul Stone",
    done: false,
  };

  const onRemoveTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("should show the pending todo", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onRemoveTodo={onRemoveTodoMock}
      />
    );

    const liElHTML = screen.getByRole("listitem");
    expect(liElHTML.className).toContain(
      "list-group-item d-flex justify-content-between align-items-center"
    );
    expect(liElHTML.className).not.toContain("bg-success text-white");

    const spanElHTML = screen.getByLabelText("span");
    expect(spanElHTML).toBeTruthy();
  });

  test("should show the completed todo", () => {
    todo.done = true;

    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onRemoveTodo={onRemoveTodoMock}
      />
    );

    const liElHTML = screen.getByRole("listitem");
    expect(liElHTML.className).toContain("bg-success text-white");
  });

  test("should call the toggle function", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onRemoveTodo={onRemoveTodoMock}
      />
    );

    const spanElHTML = screen.getByLabelText("span");
    fireEvent.doubleClick(spanElHTML);

    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test("should call the delete function", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onRemoveTodo={onRemoveTodoMock}
      />
    );

    const deleteBtnElHTML = screen.getByRole("button");
    fireEvent.click(deleteBtnElHTML);

    expect(onRemoveTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
