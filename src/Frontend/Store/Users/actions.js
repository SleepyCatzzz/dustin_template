import { fetchUsers } from './Utilities/userAPI';

export const getUsers = () => {
  let action = {
    type:"GET_USERS",
    payload: []
  }
  return(
    (dispatch) => {
      fetchUsers((users) => { 
        action.payload = users;
        dispatch(JSON.parse(JSON.stringify(action))); 
      })
    }
  );
}
