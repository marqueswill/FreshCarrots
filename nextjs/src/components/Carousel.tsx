import { BookShelf } from "@/pages/_app";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";

import styles from "@/styles/Slider.module.css";
import { render } from "react-dom";

export default function Carousel({ bookShelf }: { bookShelf: BookShelf }) {
  const settings = {
    dots: true,
    // accessibility= true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div>
      <h1 className={styles.category}>{bookShelf.category}</h1>

      <div className={styles.row}>
        <Slider {...settings} className={styles.slider}>
          {bookShelf.books.map((item) => (
            <div>
              <img
                src={item.thumbnail}
                alt="slider"
                className={styles.thumbnail}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
