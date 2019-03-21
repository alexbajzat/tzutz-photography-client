import React, { useEffect, useState } from "react";

// styles
import style from "./Showroom.module.css";

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
    }
  ]);

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
              console.log(category);
              return (
                <Category
                  className="col"
                  name={category.name}
                  imageUrl={category.imageUrl}
                />
              );
            })}
          </div>
          <div className={`${style.presenterContainer} container-fluid`} />
        </div>
      </div>
    </div>
  );
}
