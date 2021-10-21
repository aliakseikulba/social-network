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

export type DialogsDataItemType = {
  id: number
  name: string
}

export type DialogsDataType = Array<DialogsDataItemType>

export type MessageDataItemType = {
  id?: number
  message: string
}

export type MessageDataType = Array<MessageDataItemType>

const dialogsData = [
  {id: 1, name: 'User One'},
  {id: 2, name: 'User Two'},
  {id: 3, name: 'User Three'},
  {id: 4, name: 'User Four'},
  {id: 5, name: 'User Five'},
  {id: 6, name: 'User Six'}
];

const messageData = [
  {id: 1, message: 'Hello, how it\'s going?'},
  {id: 2, message: 'Tomorrow at 9.'},
  {id: 3, message: 'Have a nice day!'}
];

const posts = [
  {id: 1, message: 'Hi, how are you?', likesCount: 2},
  {id: 2, message: 'It\'s my first post', likesCount: 5},
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogsData={dialogsData} messageData={messageData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
