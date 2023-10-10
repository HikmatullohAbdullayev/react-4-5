import React from "react";
import { Card } from "./card";
import homeStyle from "./home.module.css";
export const Home = () => {
  return (
    <>
      <div className={homeStyle.home__main}>
        <div className={`${homeStyle.container} ${homeStyle.home_box} `}>
          <div className={homeStyle.box_content}>
            <h1 className={homeStyle.sub_title}>
              Best Furniture For Your Castle....
            </h1>
            <h2 className={homeStyle.title}>
              New Furniture Collection Trends in 2020
            </h2>
            <p className={homeStyle.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <span className={homeStyle.hero_btn}>Shop Now</span>
          </div>
        </div>
      </div>

      <div className={homeStyle.product}>
      <div className={homeStyle.container}>
      <h2 className={homeStyle.product_title}> Maxsulotlar</h2>
        <div className={homeStyle.product_box}>

            <Card/>
        </div>

      </div>
      </div>
    </>
  );
};
