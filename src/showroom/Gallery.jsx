import React, { useRef, useEffect, useState } from 'react';
import styles from './Gallery.module.css';

export default function Gallery(props) {
    const images = props.images;
    const self = useRef();
    const [galleryPreview, setGalleryPreview] = useState();
    const screenWidthTreshold = 500;

    useEffect(() => {
        console.log("in effect");
        setGalleryPreview(images.map((image, idx) => {
            console.log(self);
            const parentWidth = self.current.clientWidth
            var maxElementWidth;
            var minElementWidth;
            console.log(`random number: ${Math.random(1000)}`)
            if (parentWidth < 500) {
                // < 500px screen aka mobile 
                maxElementWidth = parentWidth / 1.7;
                minElementWidth = parentWidth / 4;
            } else {
                // > 500px screen aka table/desktop
                maxElementWidth = parentWidth / 1.7;
                minElementWidth = parentWidth / 4;
            }
            const width = Math.round(Math.random(maxElementWidth) * 100) + minElementWidth;
            console.log(width);

            const randomWithStyle = {
                width: `${width}px`,
                backgroundImage: `url(${image.url})`,
                backgroundSize: "cover",
                backroundRepeat: "no-repeat"
            }
            return <div
                className={`${styles.image}`}
                style={randomWithStyle}
            />
        }))
    }, [])

    return (
        <div ref={self} className={`${styles.mainContainer}`}>
            <div className={`${styles.imagesContainer}`}>
                {galleryPreview}
            </div>
        </div>
    )
}