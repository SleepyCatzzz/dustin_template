import React from 'react';
import { UserTable, Counter } from '../Components';
import { Actions } from '../Store/';
import { connect } from 'react-redux';

const Home = (props) => {

  React.useEffect(() => {
    props.actions.users.get();
    props.actions.counter.set(1);
  }, []);


  return(
    <div>
     <h1>Home</h1>
     <UserTable 
      names={props.users.list}
     />
     <Counter
      count={props.counter.count}
      set={props.actions.counter.set}
     />
    <h2>Props</h2>
    <textarea readOnly value={JSON.stringify(props, null, 2)}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);