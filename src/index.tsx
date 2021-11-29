import store from './redux/reduxStore';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './index.css';
import {Provider} from './StoreContext';


let rerenderEntireTree = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App state={store.getState()}
           dispatch={store.dispatch.bind(store)}
           store={store}/>
    </Provider>,
    document.getElementById('root')
  );
};

rerenderEntireTree();
store.subscribe(() => {
rerenderEntireTree();
});