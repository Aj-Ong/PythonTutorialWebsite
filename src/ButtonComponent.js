import React from 'react';
import {
  withStyles,
  Theme,
  withTheme
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { cyan } from '@material-ui/core/colors';

const ColorButton = withStyles((theme) => ({
  root: {
    backgroundColor: cyan[600],
    '&:hover': {
      backgroundColor: cyan[800],
    },
  },
}))(Button);


export default function ButtonComponent(props) {
  
  function clickHandler(){
    console.log(props.link);
    props.changeLink(props.link);
    props.changeHeader(props.tutorialName);
  }
  return (
    <div>
      <div>
      <ColorButton style={{ minWidth: 250, border: "1px solid white", minHeight: 60 }} variant="contained" color="primary" onClick={clickHandler}>
        {props.tutorialName}
      </ColorButton>
      </div>
    </div>
  );
}
