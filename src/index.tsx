import {store} from './redux/state';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './index.css';

let rerenderEntireTree = () => {
  ReactDOM.render(
      <App state={store.getState()}
           dispatch={store.dispatch.bind(store)}/>,
    document.getElementById('root')
  );
};

rerenderEntireTree();

store.subscribe(rerenderEntireTree);