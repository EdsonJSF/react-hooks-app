import { todoReducer } from "../../../src/08-useReducer/todoReducer";

describe("Test on todoReducer", () => {
  const initialState = [
    {
      id: 1,
      description: "Demo Test",
      done: false,
    },
  ];
  test("should return the initial state", () => {
    const newState = todoReducer(initialState, {});

    expect(newState).toEqual(initialState);
  });

  test("should add a todo", () => {
    const action = {
      type: "[TODO] Add todo",
      payload: {
        id: 2,
        description: "Demo Test #2",
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test("should remove a todo", () => {
    const action = {
      type: "[TODO] Remove todo",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(0);
    expect(newState).toEqual([]);
  });



  test("should toggle a todo", () => {
    const action = {
      type: "[TODO] Toggle todo",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(1);
    expect(newState[0].done).toBe(!initialState.done);
  });
});
