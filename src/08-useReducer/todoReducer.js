export const todoReducer = (initialState = [], action = {}) => {
  if (action.type === "[TODO] Add todo") {
    return [...initialState, action.payload];
  }

  if (action.type === "[TODO] Remove todo") {
    return initialState.filter((todo) => todo.id !== action.payload);
  }

  return [...initialState];
};
