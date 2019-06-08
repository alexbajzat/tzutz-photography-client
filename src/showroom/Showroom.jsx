import React, { useState } from "react";
import Blur from 'react-blur';

// styles
import styles from "./Showroom.module.css";

//components
import Gallery from './Gallery.jsx'

// assets
import backgroundImage from '../assets/blur-background.jpg';

export default function Showroom() {
  const [images] = useState([
    {
      name: "category 1",
      url: "https://upload.wikimedia.org/wikipedia/commons/d/de/Nokota_Horses_cropped.jpg"
    },
    {
      name: "category 2",
      url: "https://www.phillymag.com/wp-content/uploads/sites/3/2019/03/monet-malatino-wedding-thumb.jpg"
    },
    {
      name: "category 3",
      url: "https://cdn.theatlantic.com/assets/media/img/mt/2019/04/GettyImages_200341573_001/lead_720_405.jpg?mod=1554835603"
    },
    {
      name: "category 1",
      url: "https://cdn0.weddingwire.com/img_g/ww/t30_wedding-recessional-b-flint-photography.jpg"
    }
    ,
    {
      name: "category 2",
      url: "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/02/naked-cake-2.jpg"
    },
    {
      name: "category 3",
      url: "https://cdn.shopify.com/s/files/1/0856/0804/products/square_2.png?v=1540901442"
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

  const [presentedImage, setPresentedImage] = useState(null);

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "fit"
  }

  function onImageSelected(image) {
    console.log(image.url);
    const imageStyle = {
      backgroundImage: `url(${image.url})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }

    setPresentedImage(
      <Blur className={styles.blurBackground} img={image.url} blurRadius={50}>
        <div className={styles.imagePreview} style={imageStyle}></div>
      </Blur>
    )
  }

  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.presenterContainer}`}  >
        {/* <div className={styles.background} style={backgroundStyle} /> */}
        {presentedImage}
      </div>
      <div className={`${styles.galleryContainer}`}>
        {/* <div className={styles.background} style={backgroundStyle} /> */}
        <Gallery images={images} onImageSelected={onImageSelected} />
      </div>
    </div>
  );
}
