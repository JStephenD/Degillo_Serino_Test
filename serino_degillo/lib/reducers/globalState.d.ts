import { initialState as todos } from './todos'
// import and define other reducers here

export interface GlobalState {
  todos: typeof todos
}