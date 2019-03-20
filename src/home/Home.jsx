import React from "react";
import Typing from "react-typing-animation";

//components
import { Showroom } from "../showroom";

//styles
import style from "./Home.module.css";

export default function Home() {
  const typingMessagePart1 = "Your memories matter.";
  const typingMessagePart2 = "I can help make them last. ";

  return (
    <div>
      <div className={`${style.header} shadow`}>
        <div className={style.bg}>
          <div className={style.bgOverlay} />
          <div className="container">
            <div className={`${style.profileImg} shadow`}>
              <div className={style.profileImgOverlay}>
                <div className={style.fbIcon} />
                <div className={style.instaIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.homeContent}>
        <div className={`text-center px-4 ${style.messageContainer}`}>
          <Typing speed={90}>
            <p>{typingMessagePart1}</p>
            <Typing.Delay ms={300} />
            <p>{typingMessagePart2}</p>
          </Typing>
        </div>
        <Showroom />
      </div>
    </div>
  );
}
