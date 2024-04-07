"use client"

import React, { createContext, useContext, useReducer } from 'react'

import { AnyAction, initialState, rootReducer } from '@/lib/reducers/rootReduer'
import { GlobalState } from '@/lib/reducers/globalState';

const GlobalStateContext = createContext<{ state: GlobalState | undefined, dispatch: React.Dispatch<AnyAction> }>
  ({ state: undefined, dispatch: () => { } })

export const GlobalProvider: React.FC<any> = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error('useGlobalState must be used within a GlobalProvider');
  }
  return context;
};