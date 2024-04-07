import combineReducers from './combineReducers';
import { GlobalState } from './globalState';

import { todosReducer, TodoAction, initialState as todosInitialState } from './todos';

// place all actions from reducers here
export type AnyAction =
  | TodoAction

const initialState = {
  todos: todosInitialState,
};

const rootReducer = combineReducers<GlobalState, AnyAction>({
  todos: todosReducer,
});

export { rootReducer, initialState };