import React, { useRef, useEffect, useState } from 'react';
import styles from './Gallery.module.css';

export default function Gallery(props) {
    const images = props.images;
    const self = useRef();
    const [galleryPreview, setGalleryPreview] = useState();
    const screenWidthTreshold = 600;
    const MOBILE_IMAGE_MAX_WIDTH = 200;
    const DESKTOP_IMAGE_MAX_WIDTH = 300;

    useEffect(() => {
        var pair = [];
        var imageContainer= [];
        console.log(self.current);
        console.log(self.current.getBoundingClientRect().width);
        const parentWidth = self.current.offsetWidth;

        for (var idx in images) {
            const image = images[idx];

            var maxElementWidth;
            var minElementWidth;
            if (parentWidth < screenWidthTreshold) {
                // < 500px screen aka mobile 
                maxElementWidth = MOBILE_IMAGE_MAX_WIDTH / 1.7;
                minElementWidth = MOBILE_IMAGE_MAX_WIDTH / 4;
            } else {
                // > 500px screen aka table/desktop
                maxElementWidth = DESKTOP_IMAGE_MAX_WIDTH / 3;
                minElementWidth = DESKTOP_IMAGE_MAX_WIDTH / 4;
            }
            const width = Math.round(Math.random(maxElementWidth) * 100) + minElementWidth;
            // console.log(`parent width: ${parentWidth}, min width: ${minElementWidth}, max width: ${maxElementWidth}, actual: ${width}`);
            const randomWithStyle = {
                width: `${width}px`,
                backgroundImage: `url(${image.url})`,
                backgroundSize: "cover",
                backroundRepeat: "no-repeat"
            }
            const element = <div
                key={idx}
                className={`${styles.image}`}
                style={randomWithStyle}
            />;
            if ((idx % 2 == 0 && idx != 0) || idx == images.length -1) {
                if(idx == images.length -1) {
                    pair.push(element);
                }
                console.log(`pair to wrap: ${pair}`)
                imageContainer.push(wrapInRow(pair));
                pair = [];
            } else {
                pair.push(element);
            }
        }
        console.log(imageContainer);
        setGalleryPreview(imageContainer);
    }, [])

    function wrapInRow(element) {
        return <div className={`${styles.imagesInnerContainer} row`}>{element}</div>
    }

    return (
        <div ref={self} className={`${styles.mainContainer}`}>
            <div className={`${styles.imagesOuterContainer}`}>
                {galleryPreview}
            </div>
        </div>
    )
}