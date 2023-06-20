import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'Z';
import * as bootstrap from 'bootstrap';
import 'S/main.scss';
import App from 'C/App/App.jsx';

 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

