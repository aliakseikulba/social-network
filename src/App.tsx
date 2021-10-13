import React from 'react';
import './App.css';


const App = () => {
  return (
    <div className='app-wrapper'>
     <header className='header'>
       <img src="https://www.logo.wine/a/logo/Ethereum/Ethereum-Icon-Purple-Logo.wine.svg" alt="logo"/>
     </header>
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
