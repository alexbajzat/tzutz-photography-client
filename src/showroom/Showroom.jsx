import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import { Element, scroller } from "react-scroll";
// styles
import style from "./Showroom.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//components
import { Category } from "./";

export default function Showroom() {
  const [categories, setCategories] = useState([
    {
      name: "category 1",
      imageUrl: "https://www.gstatic.com/webp/gallery/1.jpg"
    },
    {
      name: "category 2",
      imageUrl: "https://www.gstatic.com/webp/gallery/2.jpg"
    },
    {
      name: "category 3",
      imageUrl: "https://www.gstatic.com/webp/gallery/3.jpg"
    },
    {
      name: "category 1",
      imageUrl: "https://www.gstatic.com/webp/gallery/1.jpg"
    },
    {
      name: "category 2",
      imageUrl: "https://www.gstatic.com/webp/gallery/2.jpg"
    },
    {
      name: "category 3",
      imageUrl: "https://www.gstatic.com/webp/gallery/3.jpg"
    },
    {
      name: "category 1",
      imageUrl: "https://www.gstatic.com/webp/gallery/1.jpg"
    },
    {
      name: "category 2",
      imageUrl: "https://www.gstatic.com/webp/gallery/2.jpg"
    },
    {
      name: "category 3",
      imageUrl: "https://www.gstatic.com/webp/gallery/3.jpg"
    }
  ]);
  const [displayPresenter, setDisplayPresenter] = useState(false);
  const presenterRef = useRef(null);
  const showroomRef = useRef(null);
  useEffect(() => {
    // console.log(style.showroomContainer);
    // console.log(backgroundRef.current.style);

    window.addEventListener("scroll", blurBackgroundOnPresenterViewable);
    window.addEventListener("touchmove", blurBackgroundOnPresenterViewable);
  });

  function scale(value, valueMin, valueMax, targetMin, targetMax) {
    return (
      ((value - valueMin) / (valueMax - valueMin)) * (targetMax - targetMin) +
      targetMin
    );
  }

  var initBgR;
  var initBgG;
  var initBgB;
  var initBgAlpha;
  var initialized = false;

  function changeOnProximity(rgbaBase, distanceToFit, maxDistance) {
    console.log(rgbaBase);
    console.log(distanceToFit);
    rgbaBase = rgbaBase.match(
      /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,([\s+]?(\d+)[\s+]?.(\d+))/i
    );
    if (!initialized) {
      initBgG = rgbaBase[1];
      initBgR = rgbaBase[2];
      initBgB = rgbaBase[3];
      initBgAlpha = rgbaBase[4];
      initialized = true;
    }
    const newR = scale(distanceToFit, 0, maxDistance, 0, initBgR);
    const newG = scale(distanceToFit, 0, maxDistance, 0, initBgG);
    var newB = scale(distanceToFit, 0, maxDistance, 0, initBgB);
    var newAlpha = scale(distanceToFit, 0, maxDistance, 0.8, initBgAlpha);
    return `rgba(${newR},${newG},${newB},${newAlpha})`;
  }

  function blurBackgroundOnPresenterViewable() {
    if (displayPresenter) {
      if (
        window.scrollY + window.innerHeight >=
        presenterRef.current.offsetTop
      ) {
        if (showroomRef.current.style.backgroundColor === "") {
          showroomRef.current.style.backgroundColor = window
            .getComputedStyle(showroomRef.current, null)
            .getPropertyValue("background-color");
        }

        const presenterBottom =
          presenterRef.current.offsetTop + presenterRef.current.offsetHeight;
        const windowYPos = window.scrollY + window.innerHeight;

        const proximity = -(windowYPos - presenterBottom);
        showroomRef.current.style.backgroundColor = changeOnProximity(
          showroomRef.current.style.backgroundColor,
          proximity < 0 ? 0 : proximity,
          presenterRef.current.offsetHeight
        );

        console.log(showroomRef.current.style.backgroundColor);
      }
    }
  }

  return (
    <div>
      <div className={`${style.showroomContainer}`} ref={showroomRef}>
        <div className={`container text-center`}>
          <div className={`${style.contentTitle}`}>
            <p>What I do</p>
            <div className={style.lineSeparator} />
          </div>
          <div className={`${style.categoryMenu} row`}>
            {categories.map(category => {
              return (
                <div>
                  <Category
                    className="col"
                    name={category.name}
                    imageUrl={category.imageUrl}
                    clicked={() => {
                      setDisplayPresenter(true);
                      scroller.scrollTo("presenter", {
                        duration: 1000,
                        delay: 100,
                        smooth: true
                      });
                    }}
                  />
                </div>
              );
            })}
          </div>
          {displayPresenter && (
            <div
              className={`${style.presenterContainer} shadow`}
              ref={presenterRef}
            >
              <Element name="presenter">
                <div className={`container text-center`}>
                  <div className={`${style.contentTitle}`}>
                    <p>Gallery</p>
                    <div className={style.lineSeparator} />
                  </div>
                </div>
                <Carousel
                  howArrows={true}
                  dynamicHeight={true}
                  autoPlay={true}
                  interval={6000}
                  useKeyboardArrows={true}
                >
                  {categories.map(category => {
                    return (
                      <div>
                        <img src={category.imageUrl} />
                      </div>
                    );
                  })}
                </Carousel>
              </Element>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
