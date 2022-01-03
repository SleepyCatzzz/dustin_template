import './Frontend/Assets/css/app.css';
import React from 'react';

import { Reducers } from './Frontend/Store/';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

//import {Home} from './Frontend/Pages/';

import { Navigator, Routes } from './Frontend/Router/';


const store = createStore(Reducers, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navigator routes={Routes}/>
      </Provider>
    </div>
  );
}


export default App;


