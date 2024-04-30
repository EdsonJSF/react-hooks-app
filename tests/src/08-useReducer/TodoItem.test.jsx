import { render, screen } from "@testing-library/react";
import { TodoItem } from "../../../src/08-useReducer/TodoItem";

describe("Test on <TodoItem />", () => {
  const todo = {
    id: 1,
    description: "Soul Stone",
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
    expect(liElHTML.className).not.toContain("bg-success text-white")
  });
});
