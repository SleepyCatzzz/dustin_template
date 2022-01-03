import React from 'react';
import { UserTable } from '../Components';
import { Actions } from '../Store/';
import { connect } from 'react-redux';

const Users = (props) => {
  return(
    <div>
     <h1>Users Page</h1>
      <UserTable names={props.users.list}/>
      <br></br>
      <h2>Props</h2>
      {JSON.stringify(props,null,2)}
    </div>
  );
}

const mapStateToProps = (state) => {
  const { counter, users } = state
  return { counter, users }
};

const mapDispatchToProps = dispatch => {
  return {
    actions:{
      users: {
        get: () => dispatch(Actions.users.get())
      },
      counter: {
        set: (count) => dispatch(Actions.counter.set(count))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);