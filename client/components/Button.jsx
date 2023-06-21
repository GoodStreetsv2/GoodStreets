import React from "react";
// import Screaming from 'A/screaming.svg';
import Icon from "../utilities/Icon.jsx";

function Button( props ) {
  //https://stackoverflow.com/questions/28261287/how-to-change-btn-color-in-bootstrap

  // const userInput = () => {
  //   //   dispatch({ type: types, payload });
  //   //   dispatch({ type: types, payload  });
  // };

  return (
    <span>
      <Icon name={props.category} />
    </span>
  );
}

export default Button;
