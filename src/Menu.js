import React from 'react';
import ButtonComponent from "./ButtonComponent";

export function Menu(props) {// Only Tutorial 1 and 3 are working so far
    return ( // the link is being passed to the button component and the onclick is now in the button component code
      <div>
        <ButtonComponent tutorialName="Lesson 1: Data Types" link="https://drive.google.com/file/d/1-OA_LvTO8WoBNAJ8DO5Trwp2MxrzxzdA/preview" changeLink={props.changeLink} changeHeader={props.changeHeader} />
        <ButtonComponent tutorialName="Lesson 2: Variables" link="2" changeLink={props.changeLink} changeHeader={props.changeHeader} />
        <ButtonComponent tutorialName="Lesson 3: If Statement" link="https://drive.google.com/file/d/1H-Ionneza5rpXpN2EaCfi6s78s-UK8r5/preview" changeLink={props.changeLink} changeHeader={props.changeHeader} />
        <ButtonComponent tutorialName="Lesson 4: For Loop" link="4" changeLink={props.changeLink} changeHeader={props.changeHeader} />
        <ButtonComponent tutorialName="Lesson 5: While Loop" link="5" changeLink={props.changeLink} changeHeader={props.changeHeader} />
        <ButtonComponent tutorialName="Lesson 6: Functions" link="6" changeLink={props.changeLink} changeHeader={props.changeHeader} />
        <ButtonComponent tutorialName="Lesson 7: Dictionaries" link="7" changeLink={props.changeLink} changeHeader={props.changeHeader} />
        <ButtonComponent tutorialName="Lesson 8: Classes" link="8" changeLink={props.changeLink} changeHeader={props.changeHeader} />
      </div>
    );
  }
  