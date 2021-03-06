import React from 'react';
import ButtonComponent from "./ButtonComponent";

export function Menu(props) {// Only Tutorial 1 and 3 are working so far
    return ( // the link is being passed to the button component and the onclick is now in the button component code
      <div>
        <ButtonComponent tutorialName="Lesson 1: Data Types" link="https://drive.google.com/file/d/1-OA_LvTO8WoBNAJ8DO5Trwp2MxrzxzdA/preview" changeLink={props.changeLink} changeHeader={props.changeHeader} />
        <ButtonComponent tutorialName="Lesson 2: Variables" link="https://drive.google.com/file/d/1IhC7Aek61n-n-_yPkKWl1QeDiyx0zv5V/preview" changeLink={props.changeLink} changeHeader={props.changeHeader} />
        <ButtonComponent tutorialName="Lesson 3: If Statement" link="https://drive.google.com/file/d/1H-Ionneza5rpXpN2EaCfi6s78s-UK8r5/preview" changeLink={props.changeLink} changeHeader={props.changeHeader} />
        <ButtonComponent tutorialName="Lesson 4: For Loop" link="https://drive.google.com/file/d/1RjsYHlfFZh-21EDjnMQjhGnMRfP3afzE/preview" changeLink={props.changeLink} changeHeader={props.changeHeader} />
        <ButtonComponent tutorialName="Lesson 5: While Loop" link="https://drive.google.com/file/d/1hwGrfxzdVALfrWkv6Ut6W-bUC85A4gl0/preview" changeLink={props.changeLink} changeHeader={props.changeHeader} />
        <ButtonComponent tutorialName="Lesson 6: Functions" link="https://drive.google.com/file/d/1kskFELLehshmZPHuW4e7CsA4R717FpQ0/preview" changeLink={props.changeLink} changeHeader={props.changeHeader} />
        <ButtonComponent tutorialName="Lesson 7: Dictionaries" link="https://drive.google.com/file/d/1k4YT7LJ986wX7Cq9yJPD7CG-NGGN3szP/preview" changeLink={props.changeLink} changeHeader={props.changeHeader} />
        <ButtonComponent tutorialName="Lesson 8: Classes" link="https://drive.google.com/file/d/1QcVYteXclNY2MDmoFaXjQtSpW3gvuFS3/preview" changeLink={props.changeLink} changeHeader={props.changeHeader} />
      </div>
    );
  }


<iframe src="https://drive.google.com/file/d/1IhC7Aek61n-n-_yPkKWl1QeDiyx0zv5V/preview" width="640" height="480"></iframe>