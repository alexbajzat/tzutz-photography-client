import React from "react";

//styles
import style from "./Button.module.css";

export default function Button(props) {
  const buttonStyle = {
    border: `1px ${props.color} solid`
  }
  const buttonTextStyle = {
    color: props.color
  }
  return (
    <div
      className={`${style.buttonContainer}`}
      style={buttonStyle}
    >
      <div className={`${style.buttonText}`}
        style={buttonTextStyle}>
        {props.text}
      </div>
    </div>
  );
}
