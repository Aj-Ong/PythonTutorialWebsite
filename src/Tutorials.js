import React, { useState } from 'react';
import "../node_modules/video-react/dist/video-react.css"; // import css
import './Home.css';
import { About } from './About.js';
import { HomeScreen } from './Home.js';
import { TutorialsComponent } from './TutorialsComponent.js';
import { Menu } from "./Menu.js";
import "./styles.css";

export function Tutorials(prop) {
  const [page, changePage] = useState();
  const [link, changeLink] = useState("https://drive.google.com/file/d/1-OA_LvTO8WoBNAJ8DO5Trwp2MxrzxzdA/preview");
  const [lessonHeader, changeHeader] = useState("Lesson 1: Data Types");
  
  function onclickAbout(){
    changePage("about");
  }
  
  function onClickHome(){
    changePage("home");
  }
  if(page === "home")  
  return (
  <HomeScreen/>
  );
  
  if(page === "about")  
  return (
  <About/>
  );
  
  return (
  <div>
    
    <div class="topnav">
      <button onClick={onClickHome}>Home</button>
      <button class="active" >Tutorials</button>
      <button onClick={onclickAbout} >About Us</button>
    </div>

    <div className="menu">
      <Menu changeLink={changeLink} changeHeader={changeHeader}/>
    </div>
    
    <h1>{lessonHeader}</h1> 
    <TutorialsComponent
      link={link}
          />
    
  </div>
  );
}

export default Tutorials;
