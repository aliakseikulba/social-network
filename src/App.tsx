import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <div className='content'>
        <div>
          <img src="https://bernardmarr.com/img/30%20Real%20Examples%20Of%20Blockchain%20Technology%20In%20Practice.png" alt="content logo"/>
        </div>
        <div>
          ava + description
        </div>
        <div>
          my posts
          <div>new post</div>
        </div>
        <div>
          <div>Post1</div>
          <div>Post2</div>
        </div>
      </div>
    </div>
  );
}


export default App;
