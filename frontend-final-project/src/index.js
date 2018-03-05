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
import packagesReducer from "./reducers/PackagesReducer";
import tagsReducer from "./reducers/TagsReducer";
import currentUserReducer from "./reducers/CurrentUserReducer";
import currentPhotographerReducer from "./reducers/CurrentPhotographerReducer";
import sessionsReducer from "./reducers/SessionsReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';



const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  currentPhotoUser: currentPhotographerReducer,
  sessions: sessionsReducer,
  photographers: photographersReducer,
  packages: packagesReducer,
  photos: photosReducer,
  tags: tagsReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
 );
registerServiceWorker();
