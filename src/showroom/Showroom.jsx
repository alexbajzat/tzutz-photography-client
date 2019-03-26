import React, { useState, useEffect, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
// styles
import style from "./Showroom.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//components
import { Category } from "./";

export default function Showroom() {
  const presenterRef = useRef();
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

  function scrollToPresenter() {
    // console.log(presenterRef.current.offsetTop);
  }
  return (
    <div>
      <div className={`${style.showroomContainer}`}>
        <div className={`container text-center`}>
          <div className={`${style.contentTitle}`}>
            <p>What I do</p>
            <div className={style.lineSeparator} />
          </div>
          <div className={`${style.categoryMenu} row`}>
            {categories.map(category => {
              return (
                <div onClick={scrollToPresenter}>
                  <Category
                    className="col"
                    name={category.name}
                    imageUrl={category.imageUrl}
                    clicked={() => {
                      setDisplayPresenter(true);
                      console.log("clicked");
                    }}
                  />
                </div>
              );
            })}
          </div>
          {displayPresenter && (
            <div
              className={`${style.presenterContainer} shadow`}
              // ref={presenterRef}
            >
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
                onChange={() => {}}
              >
                {categories.map(category => {
                  return (
                    <div>
                      <img src={category.imageUrl} />
                    </div>
                  );
                })}
              </Carousel>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
