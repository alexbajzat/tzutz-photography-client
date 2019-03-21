import React from "react";

//components
import { Button } from "../button";

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
          <div className={style.categoryName}>{props.name}</div>
        </div>
        <div className={style.goToButton}>
          <Button display="Open Gallery" color="white" />
        </div>
      </div>
    </div>
  );
}
