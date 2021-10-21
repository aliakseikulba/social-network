import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {DialogsDataType, MessageDataType, PostsType} from './index';

type AppPropsType = {
  posts: PostsType
  dialogsData: DialogsDataType
  messageData: MessageDataType
}

const App = (props: AppPropsType) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Route path="/profile">
            <Profile posts={props.posts}/>
          </Route>
          <Route path="/dialogs">
            <Dialogs dialogsData={props.dialogsData} messageData={props.messageData}/>
          </Route>
          <Route path="/news">
            <News/>
          </Route>
          <Route path="/music">
            <Music/>
          </Route>
          <Route path="/settings">
            <Settings/>
          </Route>
        </div>
      </div>
    </BrowserRouter>
  );
};


export default App;
