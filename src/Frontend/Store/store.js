import { combineReducers } from 'redux';
import { counterReducer, counterActions } from './Counter';
import { usersReducer, usersActions } from './Users';

const Reducers = combineReducers({
  users: usersReducer,
  counter: counterReducer
});

const Actions = { 
  users: usersActions ,
  counter: counterActions
}

export { Reducers, Actions }