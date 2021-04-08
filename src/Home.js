import React, { useState } from 'react';
import "../node_modules/video-react/dist/video-react.css"; // import css
import './Home.css';
import { About } from './About.js';
import { Tutorials } from './Tutorials.js';

export function HomeScreen(prop) {
  const [page, changePage] = useState();
  
  function onclickAbout(){
    changePage("about");
    console.log(page);
  }
  
  function onclickTutorials(){
    changePage("tutorials");
    console.log(page);
  }
  if(page === "tutorials")  
  return (
  <Tutorials/>
  );
  
  if(page === "about")  
  return (
  <About/>
  );
  
  return (
    <div>
      <div class="topnav">
        <button class="active" >Home</button>
        <button onClick={onclickTutorials} >Tutorials</button>
        <button onClick={onclickAbout} >About Us</button>
      </div> 
      <div class="home">
        Welcome to our Python Tutorial Website!
      </div>
    </div>
  );
  
}

export default HomeScreen;
