import React, { createContext, ReactElement, useReducer, Dispatch} from 'react';
import { testInitialState, testReducer, testType } from './reducers/test';

export interface actionType {
  payload: any;
  type: string;
}

export interface stateType {
  test: testType
}

export const INITIAL_STATE = {
  test: testInitialState
};

const Context = createContext<{
  state: stateType;
  dispatch: Dispatch<any>;
}>({
  state: INITIAL_STATE,
  dispatch: () => null
});

const mainReducer = ( {test} : stateType, action : any) => ({
  test: testReducer(test, action)
});

const Provider = ( { children } : any ) : ReactElement => {
  const [state, dispatch] = useReducer(mainReducer, INITIAL_STATE);
  return (
    <Context.Provider value={{state, dispatch}}>
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };