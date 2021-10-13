import React from 'react';
import './App.css';
import Header from "./components/Header";


const App = () => {
  return (
    <div className='app-wrapper'>
     <Header />
      <nav className='nav'>
        <div>
          <a href="#">Profile</a>
        </div>
        <div>
          <a href="#">Messages</a>
        </div>
        <div>
          <a href="#">News</a>
        </div>
        <div>
          <a href="#">Music</a>
        </div>
      </nav>
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
