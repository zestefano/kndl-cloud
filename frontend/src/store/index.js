import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import profileReducer from "./profileReducer";

import sessionReducer from './session';
import songReducer from "./songReducer";
import commentReducer from "./commentReducer";


const rootReducer = combineReducers({
  session: sessionReducer,
  songs: songReducer,
  profile: profileReducer,
  comments: commentReducer
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
