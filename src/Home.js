import React, { useState } from 'react';
import "../node_modules/video-react/dist/video-react.css"; // import css
import './Home.css';
import { About } from './About.js';
import { Tutorials } from './Tutorials.js';
import python from './python.png';


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
      <div class="welcome">
        <h2>Welcome to our Python Tutorial Website!</h2>
        <br></br>
        <br></br>
        <br></br>
        <img class="python_img" src={python}/>
      </div>
    </div>
  );
  
}

export default HomeScreen;
