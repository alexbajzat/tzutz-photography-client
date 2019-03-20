import React from "react";

//styles
import style from "./Category.module.css";

export default function Category(props) {
  return (
    <div className={`${style.categoryContainer} shadow`}>
      <div className={style.categoryOverlay}>
        <img
          className={style.categoryImage}
          src={props.imageUrl}
          alt={props.name}
        />
      </div>
    </div>
  );
}
