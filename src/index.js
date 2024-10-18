import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './courP/App';  // Ensure this path is correct
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './courP/store/store'; // Ensure this path is correct

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
