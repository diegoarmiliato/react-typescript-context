import React, { ReactElement, useContext } from 'react';
import './App.css';
import { Context } from './store';
import { testActions } from '@reducers/test';

const App = () : ReactElement => {

  const { state, dispatch } = useContext(Context);

  const { test } = state;

  const change = () => {
    dispatch( { type: testActions.TEST_DO, payload: test.value === 'Diego' ? 'Jonas' : 'Diego' } );
  };

  return (
    <div className="App" onClick={() => change()}>
      {test.value}
    </div>
  );
};

export default App;
