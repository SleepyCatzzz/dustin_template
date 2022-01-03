import React from 'react';

const UserTable = ({names}) => {
  return(
    <div>
      <h2>User Table</h2>
      {
        names.map((name)=>{
          return(<div key={name}>{name}</div>);
        })
      }
    </div>
  );
}
export default UserTable;


