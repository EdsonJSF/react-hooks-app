// Initial State
const initialState = [
  {
    id: 1,
    title: "Recolectar la piedra del Alma",
    body: "Buscarla y guardarla",
    done: false,
  },
];

// Reducer
const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "[TODO] Add todo") {
    return [...state, action.payload];
  }

  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  title: "Recolectar la piedra del Poder",
  body: "Buscarla y guardarla",
  done: false,
};

// Action
const addTodoAction = {
  type: "[TODO] Add todo",
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log(todos);
