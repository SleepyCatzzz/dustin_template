import React from 'react';

const Counter = (props) => {
  return(
    <div>
      <h2>Counter</h2>
      <div>
        Count: {props.count}
      </div>
       <br></br>
      <button
        onClick={() => {props.set(props.count+1);}}
      >
        Increment
      </button>
      <button
        onClick={() => {props.set(props.count-1)}}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;