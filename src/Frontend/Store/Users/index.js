import { usersReducer } from './reducer';
import { getUsers } from './actions';

const usersActions = {
  get: getUsers
}

export { usersReducer, usersActions };