import {applyMiddleware, combineReducers, createStore} from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


import category from './reducers/category'

const rootReducer = combineReducers({
  category
});

const middlewares = [
  thunk,
  logger
]

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middlewares),
  )
);


export default store