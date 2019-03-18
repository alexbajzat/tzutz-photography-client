import React, { useEffect, useState } from "react";
import Typing from "react-typing-animation";
import style from "./Home.module.css";

export default function Home() {
  const typingMessagePart1 = "Your memories matter.";
  const typingMessagePart2 = "I can help make them last. ";

  return (
    <div className={`${style.header} shadow`}>
      <div className={style.bg}>
        <div className={style.bgOverlay} />
      </div>

      <div className={`${style.profileWrapper} container`}>
        <div className={style.profile}>
          <div className={`${style.profileImg} shadow`}>
            <div className={style.profileImgOverlay}/>
          </div>
          <div
            className={`container text-center px-4 ${style.messageContainer}`}
          >
            <Typing speed={90}>
              <p>{typingMessagePart1}</p>
              <Typing.Delay ms={500} />
              <p>{typingMessagePart2}</p>
            </Typing>
          </div>
          <div className={`container text-center ${style.separatorGrid}`}>
            <div className={style.lineSeparator} />
            <div className={style.cameraSeparator} />
            <div className={style.lineSeparator} />
          </div>
        </div>
        <div className={style.homeContent} />
      </div>
    </div>
  );
}
