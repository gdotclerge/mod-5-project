import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import photoReducer from "./reducers";
import thunk from "redux-thunk"

const store = createStore(photoReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
 );
registerServiceWorker();
