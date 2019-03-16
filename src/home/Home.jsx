import React from "react";
import style from "./Home.module.css";

export default function Home() {
  return (
    <div className={style.main}>
      <div className={`${style.bg} animated bounce slow`} />
      <div className={`${style.profile} container`}>
        <div className="row">
          <div className={`${style.profileImg} shadow`} />
        </div>
      </div>
    </div>
  );
}
