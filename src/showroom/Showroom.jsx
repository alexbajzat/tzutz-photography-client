import React, { useState } from "react";
import Gallery from './Gallery.jsx'
// styles
import styles from "./Showroom.module.css";

// assets
import backgroundImage from '../assets/blur-background.jpg';

export default function Showroom() {
  const [images, setImages] = useState([
    {
      name: "category 1",
      url: "https://www.gstatic.com/webp/gallery/1.jpg"
    },
    {
      name: "category 2",
      url: "https://www.gstatic.com/webp/gallery/2.jpg"
    },
    {
      name: "category 3",
      url: "https://www.gstatic.com/webp/gallery/3.jpg"
    },
    {
      name: "category 1",
      url: "https://www.gstatic.com/webp/gallery/4.jpg"
    }
    ,
    {
      name: "category 2",
      url: "https://www.gstatic.com/webp/gallery/5.jpg"
    },
    {
      name: "category 3",
      url: "https://www.gstatic.com/webp/gallery/1.jpg"
    },
    // {
    //   name: "category 1",
    //   url: "https://www.gstatic.com/webp/gallery/2.jpg"
    // },
    // {
    //   name: "category 2",
    //   url: "https://www.gstatic.com/webp/gallery/3.jpg"
    // },
    // {
    //   name: "category 3",
    //   url: "https://www.gstatic.com/webp/gallery/4.jpg"
    // }
  ]);


  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }

  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.presenterContainer}`}>
        <div className={styles.background} style={backgroundStyle} />
      </div>
      <div className={`${styles.galleryContainer}`}>
        <Gallery images={images} />
      </div>
    </div>
  );
}
