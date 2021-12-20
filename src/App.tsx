import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {Route, Switch} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {UsersContainer} from './components/Users/UsersContainer';
import {ProfileMainContainer} from './components/Profile/ProfileContainer';


const App: React.FC = () => {
  return (
    <div className="layout">
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Switch>
            <Route path="/profile/:userId?">
              <ProfileMainContainer/>
            </Route>
            <Route path="/dialogs">
              <DialogsContainer/>
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
            <Route path="/users">
              <UsersContainer/>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};


export default App;
