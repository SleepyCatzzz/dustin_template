const INITIAL_STATE = {
  list: []
} 

export const usersReducer = (state = INITIAL_STATE, action) => {
  let currentState = JSON.parse(JSON.stringify(state));
  switch(action.type) {
    case 'GET_USERS':
      currentState.list = action.payload;
      return currentState;
    default:
      return state
  }
};

