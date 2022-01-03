import { counterReducer } from './reducer';
import { setCount } from './actions';

const counterActions = {
  set: setCount
}

export { counterReducer, counterActions };