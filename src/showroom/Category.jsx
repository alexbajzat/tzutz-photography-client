import React from "react";

//styles
import style from "./Category.module.css";

export default function Category(props) {
  return (
    <div className={`${style.categoryContainer} shadow-lg`}>
      <div
        style={{ backgroundImage: `url(${props.imageUrl})` }}
        className={style.categoryImage}
      >
        <div className={style.categoryOverlay}>
          <div>{props.name}</div>
        </div>
      </div>
    </div>
  );
}
