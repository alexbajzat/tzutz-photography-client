import React, { useRef, useEffect, useState } from 'react';
import styles from './Gallery.module.css';


export default function Gallery(props) {
    const images = props.images;
    const onImageSelectedCallback = props.onImageSelected;

    const self = useRef();
    const [galleryPreview, setGalleryPreview] = useState();
    const SCREEN_WIDTH_TRESHOLD = 600;
    const LARGE_SCREEN_WIDTH_TRESHOLD = 800;
    const MOBILE_IMAGE_MAX_WIDTH = 200;
    const DESKTOP_IMAGE_MAX_WIDTH = 300;
    var selectedIdx;

    useEffect(() => {
        doImagePlacement();
    }, [])


    function doImagePlacement() {
        var pair = [];
        var imageContainer = [];
        const parentWidth = self.current.offsetWidth;
        var countPerRow = parentWidth > LARGE_SCREEN_WIDTH_TRESHOLD ? 3 : 2;
        for (var idx in images) {
            const image = images[idx];
            idx = parseInt(idx);
            var maxElementWidth;
            var minElementWidth;
            if (parentWidth < SCREEN_WIDTH_TRESHOLD) {
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

            const element = createElement(idx, image, width);
            pair.push(element);

            const isLastElement = idx === images.length - 1;
            if ((idx % countPerRow === 0) || isLastElement) {
                imageContainer.push(wrapInRow(pair, idx));
                pair = [];
            }
        }
        setGalleryPreview(imageContainer);
    }

    function wrapInRow(element, idx) {
        return <div className={`${styles.imagesInnerContainer}`} key={idx}>{element}</div>
    }

    function createElement(idx, image, width) {
        const randomWithStyle = {
            width: `${width}px`,
            backgroundImage: `url(${image.url})`,
            backgroundSize: "cover",
            backroundRepeat: "no-repeat"
        }
        return <div
            key={idx}
            className={`${styles.image}`}
            style={randomWithStyle}
            onClick={() => {onImageSelectedCallback(image)}}
            >
            <div className={`${styles.previewClickArea}`}>
            </div>
        </div>;
    }

    return (
        <div ref={self} className={`${styles.mainContainer}`}>
            <div className={`${styles.imagesOuterContainer}`}>
                {galleryPreview}
            </div>
        </div>
    )
}