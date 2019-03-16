import React, { useState, useEffect } from "react";
import Typing from "react-typing-animation";
import style from "./Home.module.css";

export default function Home() {
  const typingMessagePart1 = "Your memories matter.";
  const typingMessagePart2 = "I can help make them last.";
  return (
    <div className={style.header}>
      <div className={`${style.bg} `} />

      <div className={`${style.profileWrapper} container`}>
        <div className={style.profile}>
          <div className={`${style.profileImg} shadow`} />
          <div className={`container text-center px-4 ${style.messageContainer}`}>
            <Typing speed={100}>
              <p>{typingMessagePart1}</p>
              <Typing.Delay ms={800} />
              <p>{typingMessagePart2}</p>
            </Typing>
          </div>
        </div>
      </div>
    </div>
  );
}
