import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route, Switch} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';


type AppPropsType = {
  // state: AppStateType
  // dispatch: Dispatch
  // store: Store
}

const App: React.FC<AppPropsType> = () => {
  return (
    <div className="layout">
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Switch>
            <Route path="/profile">
              <Profile/>
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
          </Switch>
        </div>
      </div>
    </div>
  );
};


export default App;
