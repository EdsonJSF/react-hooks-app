export const todoReducer = (initialState = [], action = {}) => {
  if (action.type === "[TODO] Add todo") {
    return [...initialState];
  }

  return [...initialState];
};
