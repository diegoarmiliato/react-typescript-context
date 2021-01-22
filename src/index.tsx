import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './Test';
import { Provider } from './store';

ReactDOM.render(
  <Provider>
    <Test/>
  </Provider>,
  document.getElementById('root')
);