const INITIAL_STATE = {
  count: 0
};


export const counterReducer = (state = INITIAL_STATE, action) => {
  //Make a copy of currentState (anything that clones the object is fine).   
  //  'let currentState = state' will not work as it copies by reference.
  let currentState = JSON.parse(JSON.stringify(state)); 

  switch(action.type) {
    case 'SET_COUNT':
      currentState.count = action.payload;
      return currentState;
    default:
      return state
  }
};

