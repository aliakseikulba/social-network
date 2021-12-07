import store from './redux/reduxStore';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';


let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
};

rerenderEntireTree();
store.subscribe(() => {
  rerenderEntireTree();
});