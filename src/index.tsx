import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type PostItemType = {
  id: number
  message: string
  likesCount: number
}

export type PostsType = Array<PostItemType>

const posts = [
  {id: 1, message: 'Hi, how are you?', likesCount: 2},
  {id: 2, message: 'It\'s my first post', likesCount: 5},
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
