import React, { useState, useEffect } from "react";
import Typing from "react-typing-animation";
import style from "./Home.module.css";

export default function Home() {
  const typingMessagePart1 = "Your memories matter.";
  const typingMessagePart2 = "I can help make them last";
  return (
    <div className={style.header}>
      <div className={`${style.bg} `} />
      
      <div className={`${style.profile} `}>
        <div className={style.profileImgWrapper}>
          <div className={`${style.profileImg} shadow`} />
        </div>
        <div className={`container text-center ${style.messageContainer}`}>
          <Typing speed={100}>
            <p>{typingMessagePart1}</p>
            <Typing.Delay ms={800} />
            <p>{typingMessagePart2}</p>
          </Typing>
        </div>
      </div>
    </div>
  );
}
