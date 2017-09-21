import {applyMiddleware, combineReducers, createStore} from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import {reducer as notifications} from 'react-notification-system-redux';
import { composeWithDevTools } from 'redux-devtools-extension';


import category from './reducers/category'
import post from './reducers/post'

const rootReducer = combineReducers({
  category,
  post,
  notifications
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