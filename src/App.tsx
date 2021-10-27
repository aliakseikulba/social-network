import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {StateType} from './redux/state';


type AppPropsType = {
  appState: StateType
}

const App: React.FC<AppPropsType> = ({appState}) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Switch>
          <Route path="/profile" >
            <Profile posts={appState.posts}/>
          </Route>
          <Route path="/dialogs">
            <Dialogs dialogsData={appState.dialogsData} messageData={appState.messageData}/>
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
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};


export default App;
