import React, { useState } from 'react';
import "../node_modules/video-react/dist/video-react.css"; // import css
import './Home.css';
import { Tutorials } from './Tutorials.js';
import { HomeScreen } from './Home.js';

export function About(prop) {
  const [page, changePage] = useState();
  
  function onclickTutorials(){
    changePage("tutorials");
  }
  
  function onClickHome(){
    changePage("home");
  }
  if(page === "home")  
  return (
  <HomeScreen/>
  );
  
  if(page === "tutorials")  
  return (
  <Tutorials/>
  );
  return (
  <div>
    <div class="topnav">
      <button onClick={onClickHome}>Home</button>
      <button onClick={onclickTutorials} >Tutorials</button>
      <button class="active" >About Us</button>
    </div> 
    AJ Ong
    Johanna Ngyuen
    Rita Moreno
    Christy Tseng
    Chinoso Chima
  </div>
  );
}

export default About;
