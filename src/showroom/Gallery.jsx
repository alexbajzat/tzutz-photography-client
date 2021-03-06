import React, { useRef, useEffect, useState } from 'react';
import styles from './Gallery.module.css';

//assets
import arrow from '../assets/arrow.png';


export default function Gallery(props) {
    const images = props.images;
    const onImageSelectedCallback = props.onImageSelected;

    const self = useRef();
    const [galleryPreview, setGalleryPreview] = useState();

    // some constants to manually manage page arrangements 
    const SCREEN_WIDTH_TRESHOLD = 600;
    const LARGE_SCREEN_WIDTH_TRESHOLD = 800;
    const MOBILE_IMAGE_MAX_WIDTH = 200;
    const DESKTOP_IMAGE_MAX_WIDTH = 300;
    const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));

    var oldSelectedIdx;
    var selectedIdx;
    var refsCollection = {};
    //TODO kill the autoplay (switch)
    var autoPlayIntervalID;
    var availableIdxs = [];


    //pagination
    const pageSize = 5;
    var page = 0;
    var elementsCount = props.images.length;

    useEffect(() => {
        doImagePlacement();
        resetAvailableIdxs();

        setTimeout(() => {
            autoPlayIntervalID = setInterval(doRandomAutoplay, 3000);
        }, 5000);
    }, [])


    function doImagePlacement() {
        var pair = [];
        var imageContainer = [];
        const parentWidth = self.current.offsetWidth;
        var countPerRow = parentWidth > LARGE_SCREEN_WIDTH_TRESHOLD ? 3 : 2;
        const currentElement = page * pageSize;
        for (var idx = currentElement; idx < currentElement + pageSize && currentElement + pageSize < images.length; idx++) {
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
        const imageStyle = {
            width: `${width}px`,
            backgroundImage: `url(${image.url})`,
            backgroundSize: "cover",
            backroundRepeat: "no-repeat",
            backgroundPosition: "center"
        }
        return <div className={styles.imageWrapper}>
            <div
                key={idx}
                className={`${styles.image}`}
                style={imageStyle}
                ref={(inst) => refsCollection[idx] = {
                    instance: inst,
                    image: image
                }}
                onClick={() => {
                    // stop the autoplay pls
                    clearInterval(autoPlayIntervalID);
                    doImageSelection(idx);
                }}
            >
                <div className={`${styles.previewClickArea}`}>
                </div>
            </div>
        </div>;
    }

    function doImageSelection(idx) {
        if (refsCollection[idx]) {
            onImageSelectedCallback(refsCollection[idx].image);
            markSelected(idx);
            markImageAsVisited(idx);
        }
    }

    function doRandomAutoplay() {
        if (availableIdxs.length === 0) {
            resetAvailableIdxs();
        }

        var idx = Math.floor(Math.random() * availableIdxs.length - 1);
        idx = idx < 0 ? 0 : idx
        markImageAsVisited(availableIdxs[idx]);
        doImageSelection(idx);
    }

    function markImageAsVisited(idx) {
        availableIdxs.splice(idx, 1);
    }

    function markSelected(idx) {
        oldSelectedIdx = selectedIdx;
        selectedIdx = idx;
        if (oldSelectedIdx != null) {
            const notSelectedClass = refsCollection[oldSelectedIdx].instance.className.replace(styles.imageSelected, "");
            refsCollection[oldSelectedIdx].instance.className = notSelectedClass;
        }
        refsCollection[selectedIdx].instance.className += ` ${styles.imageSelected}`;
    }

    function resetAvailableIdxs() {
        availableIdxs = range(0, images.length - 1, 1);
    }

    function doPagination(action) {
        page = page + action;
        doImagePlacement();
    }


    function getPaginationButton(type) {
        return {
            backgroundImage: `url(${arrow})`,
            backgroundSize: "cover",
            backroundRepeat: "no-repeat",
            backgroundPosition: "center",
            transform: type === -1 ? 'rotate(-90deg)' : 'rotate(90deg)'
        }
    }

    return (
        <div ref={self} className={`${styles.mainContainer}`}>
            <div className={`${styles.imagesOuterContainer}`}>
                {galleryPreview}
            </div>
            <div className={styles.paginationControlsContainer}>
                {page != 0 &&
                    <div
                        className={styles.paginationButton}
                        style={getPaginationButton(-1)}
                        // onClick={doPagination(-1)}
                         />}
                {page * pageSize < elementsCount &&
                    <div
                        className={styles.paginationButton}
                        style={getPaginationButton(1)}
                        // onClick={doPagination(1)}
                         />}
            </div>
        </div>
    )
}