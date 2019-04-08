import React from "react";

//styles
import style from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={`${style.main}`}>
      <div className={`container text-center`}>
        <div className={style.contentTitle}>
          <p>Contact</p>
          <div className={style.lineSeparator} />
        </div>
      </div>
    </div>
  );
}
