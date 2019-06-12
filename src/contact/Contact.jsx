import React from "react";

import backgroundImage from '../assets/paul.jpg';

//styles
import styles from "./Contact.module.css";

export default function Contact() {
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backroundRepeat: "no-repeat",
    backgroundPosition: "center"
  }

  const titleLabel = 'My name is';
  const title = 'Paul Tut';
  const phoneLabel = 'Call me at';
  const phone = '0742123212';
  const emailLabel = 'Email me at';
  const email = 'paul.tzutz@gmail.com';


  return (
    <div className={`${styles.mainContainer}`}>
      <div className={styles.mobileBackground} />
      <div
        className={styles.imageContainer}
        style={backgroundImageStyle}
      />

      <div className={styles.contactContainer}>
        <div className={`${styles.detailsContainer} ${styles.title}`}>
          <div><p>{titleLabel}</p></div>
          <div><p>{title}</p></div>
          <div className={styles.separator}/>
        </div>
        <div className={styles.detailsContainer}>
          <p>{phoneLabel}</p>
          <p>{phone}</p>
        </div>
        <div className={styles.detailsContainer}>
          <p>{emailLabel}</p>
          <p>{email}</p>
        </div>
        <div className={styles.detailsContainer}>
          Social media
        </div>
      </div>
    </div>
  );
}
