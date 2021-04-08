import React, { useState } from 'react';
import "../node_modules/video-react/dist/video-react.css"; // import css
import './Home.css';

export function TutorialsComponent(prop) {
  return (
  <div>
    <iframe src={prop.link} width="640" height="480"></iframe>
  </div>
  );
}

export default TutorialsComponent;
