import React from 'react';
import ButtonComponent from "./ButtonComponent";

export function Menu(props) {

  const clickHandler = () => {
    //TODO
  }

    return (
      <div>
        <ButtonComponent tutorialName="Lesson 1: Data Types" onClick={clickHandler}/>
        <ButtonComponent tutorialName="Lesson 2: Variables" />
        <ButtonComponent tutorialName="Lesson 3: If Statement" />
        <ButtonComponent tutorialName="Lesson 4: For Loop" />
        <ButtonComponent tutorialName="Lesson 5: While Loop" />
        <ButtonComponent tutorialName="Lesson 6: Functions" />
        <ButtonComponent tutorialName="Lesson 7: Dictionaries" />
        <ButtonComponent tutorialName="Lesson 8: Classes" />
      </div>
    );
  }
  