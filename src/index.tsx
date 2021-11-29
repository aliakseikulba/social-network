import store from './redux/reduxStore';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './index.css';
import {StateType} from './types/types';

let rerenderEntireTree = (state: StateType) => {
  ReactDOM.render(
      <App state={store.getState()}
           dispatch={store.dispatch.bind(store)}
           store={store}/>,
    document.getElementById('root')
  );
};

rerenderEntireTree(store.getState());
store.subscribe(() => {
rerenderEntireTree(store.getState());
});