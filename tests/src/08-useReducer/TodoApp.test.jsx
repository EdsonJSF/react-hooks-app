import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../../src/08-useReducer/TodoApp";
import { useTodos } from "../../../src/hooks";

jest.mock("../../../src/hooks");

describe("Test on <TodoApp />", () => {
  const todos = [
    { id: 1, title: "Soul Stone", body: "Find it", done: false },
    { id: 2, title: "Time Stone", body: "Find it", done: true },
  ];

  useTodos.mockReturnValue({
    todos: [...todos],
    todosCount: 2,
    todosWaiting: 1,
    handleNewTodo: jest.fn(),
    handleRemoveTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
  });

  test("should show the component", () => {
    render(<TodoApp />);

    const spanElsHTML = screen.getAllByLabelText("span");
    expect(spanElsHTML[0].innerHTML).toContain(todos[0].title);
    expect(spanElsHTML[0].innerHTML).toContain(todos[0].body);
    expect(spanElsHTML[1].innerHTML).toContain(todos[1].title);
    expect(spanElsHTML[1].innerHTML).toContain(todos[1].body);
  });
});
