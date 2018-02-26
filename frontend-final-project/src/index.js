import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import photographersReducer from "./reducers/PhotographersReducer";
import photosReducer from "./reducers/PhotosReducer";
import tagsReducer from "./reducers/TagsReducer";
import thunk from "redux-thunk"



const rootReducer = combineReducers({
  // currentUser: currentUserReducer,
  photographers: photographersReducer,
  photos: photosReducer,
  tags: tagsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
 );
registerServiceWorker();
