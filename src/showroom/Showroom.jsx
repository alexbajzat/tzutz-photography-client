import React from "react";

// styles
import style from "./Showroom.module.css";

//components
import { Category } from "./";

export default function Showroom() {
  return (
    <div>
      <div className={`${style.showroomContainer}`}>
        <div className={`container text-center`}>
          <div className={`${style.contentTitle}`}>
            <p>What I do</p>
            <div className={style.lineSeparator} />
          </div>
          <div className={`${style.categoryMenu} row`}>
            <Category
              className="col"
              name="category1"
              imageUrl="https://www.gstatic.com/webp/gallery/1.jpg"
            />
            <Category
              className="col"
              name="category2"
              imageUrl="https://www.gstatic.com/webp/gallery/2.jpg"
            />
             <Category
              className="col"
              name="category3"
              imageUrl="https://www.gstatic.com/webp/gallery/3.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
