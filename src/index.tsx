import {store} from './redux/state';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()}
           addPost={store.addPost.bind(store)}
           updateNewPostText={store.updateNewPostText.bind(store)}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

rerenderEntireTree();

store.subscribe(rerenderEntireTree);