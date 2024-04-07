import { Reducer } from "react";

export type Todo = {
  completed: boolean;
  text: string;
};

export type TodoAction =
  | { type: 'ADD_TODO'; payload: Todo }
  | { type: 'REMOVE_TODO'; payload: { text: string } }
  | { type: 'SET_TODO_STATUS'; payload: { text: string, completed: boolean } }

export const initialState: Todo[] = [
  {
    completed: false,
    text: 'initial todo 1'
  },
  {
    completed: true,
    text: 'initial todo 2'
  }
];

export const todosReducer: Reducer<Todo[], TodoAction> = (state: Todo[], action: TodoAction): Todo[] => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'REMOVE_TODO':
      return state.filter(todo => todo.text !== action.payload.text);
    case 'SET_TODO_STATUS':
      return state.map(todo => {
        if (todo.text == action.payload.text) {
          todo.completed = action.payload.completed
        }
        return todo
      });
    default:
      return state;
  }
};

export default todosReducer
