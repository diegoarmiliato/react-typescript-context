import React, { ReactElement, useContext } from 'react';
import { Context } from './store';
import { testActions } from '@reducers/test';

const Test = () : ReactElement => {

  const { state, dispatch } = useContext(Context);

  const { test } = state;

  const change = () => {
    dispatch( { type: testActions.TEST_DO, payload: test.value === 'Diego' ? 'Jonas' : 'Diego' } );
  };

  return (
    <div className="Test" onClick={() => change()}>
      {test.value}
    </div>
  );
};

export default Test;
