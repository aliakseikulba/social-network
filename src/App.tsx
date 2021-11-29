import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {ActionsTypes, StateType} from './types/types';
import {AppStoreType} from './redux/redux-store';
import {Store} from 'redux';


type AppPropsType = {
  state: StateType
  dispatch: (action: ActionsTypes) => void
  store: Store<AppStoreType, ActionsTypes>
}

const App: React.FC<AppPropsType> = ({store, state, dispatch}) => {


  return (
    <BrowserRouter>
      <div className="layout">
        <div className="app-wrapper">
          <Header/>
          <Navbar state={state.sideBar}/>
          <div className="app-wrapper-content">
            <Routes>
              <Route path="/profile"
                     element={
                       <Profile state={state.profilePage}
                                dispatch={dispatch}/>
                     }/>
              <Route path="/dialogs"
                     element={
                       <Dialogs store={store}/>
                     }/>
              <Route path="/news"
                     element={
                       <News/>
                     }/>
              <Route path="/music"
                     element={
                       <Music/>
                     }/>
              <Route path="/settings"
                     element={
                       <Settings/>
                     }/>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};


export default App;
