export const setCount = (count) => {
  
  const action = {
    type: 'SET_COUNT',
    payload: count
  };

  return(
    (dispatch) => {
      dispatch(action);
    }
  );
}
