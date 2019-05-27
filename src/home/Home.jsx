import React from "react";
import backgroundImage from '../assets/home-cake.jpg';

//components
import { Header } from "../header";
//styles
import style from "./Home.module.css";
import Button from "../button/Button";

export default function Home() {
  const contentTitle = "Your memories matter. I can help make them last."
  const content = "Quality photography services for your life events."
  const mainContainerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }
  return (
    <div
      className={`${style.mainContainer} "container-fluid"`}
      style={mainContainerStyle}
    >

      <div className={`${style.contentGroup}`}>
        <div className={`${style.content}`}>
          <div className={`${style.contentTitle}`}>
            <p>{contentTitle}</p>
          </div>
          <p>{content}</p>
        </div>
        <div className={`${style.buttonGroup}`}>
          <Button color="white" text="Gallery" />
          <Button color="white" text="Contact" />
        </div>
      </div>
    </div>
  );
}
