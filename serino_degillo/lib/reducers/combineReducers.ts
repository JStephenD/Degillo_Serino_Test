import { Reducer } from "react";

// function combineReducers<State, Action>(reducers: {
//   [K in keyof State]: Reducer<State[K], Action>;
// }): Reducer<State, Action> {
//   return function (state: State, action: Action): State {
//     const newState: State = {} as State;
//     let hasChanged = false;
//     for (const key in reducers) {
//       const reducer = reducers[key];
//       const previousStateForKey = state[key];
//       const nextStateForKey = reducer(previousStateForKey, action);
//       newState[key] = nextStateForKey;
//       hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
//     }
//     return hasChanged ? newState : state;
//   };
// }

// simpler version
function combineReducers<State, Action>(reducers: {
  [K in keyof State]: Reducer<State[K], Action>
}) {
  return function (state: State, action: Action): State {
    const newState = {} as State;
    for (const key in reducers) {
      newState[key] = reducers[key](state[key], action);
    }
    return newState;
  };
}


export default combineReducers;