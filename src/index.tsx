import store from './redux/redux-store';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './index.css';
import {StateType} from './types/Types';

let rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(
      <App state={state}
           dispatch={store.dispatch.bind(store)}
           store={store}/>,
    document.getElementById('root')
  );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState()
  rerenderEntireTree(state)
});