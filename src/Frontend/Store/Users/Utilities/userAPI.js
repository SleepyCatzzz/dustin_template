//Client-side javascript to do http requests with the userAPI

//Put fetch code in here.

var users = ['bob', 'steven', 'franklin'];

export const fetchUsers = async (callback) => {
  callback(users);
}