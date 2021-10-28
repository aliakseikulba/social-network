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
  state: StateType
}

const App: React.FC<AppPropsType> = ({state}) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar state={state.sideBar}/>
        <div className="app-wrapper-content">
          <Switch>
            <Route path="/profile">
              <Profile state={state.profilePage}/>
            </Route>
            <Route path="/dialogs">
              <Dialogs state={state.messagesPage}/>
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
