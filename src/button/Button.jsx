import React, { useEffect } from "react";

//styles
import style from "./Button.module.css";

export default function Button(props) {
  return (
    <div
      className={`container-fluid px-0 ${style.buttonContainer}`}
      style={{ borderColor: props.color }}
    >
      <div className={`${style.buttonBackground}`}>
        <div className={`${style.display} m-0`}>
          <p style={{ color: props.color }}>{props.display}</p>
        </div>
      </div>
    </div>
  );
}
