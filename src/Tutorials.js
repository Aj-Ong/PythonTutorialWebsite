import React, { useState } from 'react';
import "../node_modules/video-react/dist/video-react.css"; // import css
import './Home.css';
import { Player } from 'video-react';
import { About } from './About.js';
import { HomeScreen } from './Home.js';
import { TutorialsComponent } from './TutorialsComponent.js';

export function Tutorials(prop) {
  const [page, changePage] = useState();
  const links = ['https://drive.google.com/file/d/1-OA_LvTO8WoBNAJ8DO5Trwp2MxrzxzdA/preview'];
  
  function onclickAbout(){
    changePage("about");
  }
  
  function onClickHome(){
    changePage("home");
  }
  function onClickTutorial(index){
    console.log("HEY --- " + index);
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
    
    <h1 onClick={onClickTutorial}>Tutorial 1</h1> 
    
     {links.map((item, index) => (
          <TutorialsComponent
            key={index}
            id={index}
            link={item}
            onClick={() => onClickTutorial(item)}
          />
        ))}
        
    <h1 onClick={onClickTutorial}>Test</h1>
    <Player
    playsInline
    poster="/assets/poster.png"
    src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
    />
  </div>
  );
}

export default Tutorials;
