import { BookShelf, Category } from "@/types/types";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";

import styles from "@/styles/Carousel.module.css";
import Link from "next/link";

export default function Carousel({ shelf }: { shelf: Category}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    arrows: true,
  };

  return (
    <div>
      <div className={styles.carousel}>
        <h1 className={styles.category}>{shelf.name}</h1>

        <div className={styles.row}>
          <Slider {...settings} className={styles.slider}>
            {shelf.books.map((item) => (
              <div>
                <Link href={item.url}>
                  <img
                    src={item.thumbnail}
                    alt="slider"
                    className={styles.thumbnail}
                  />
                </Link>
              </div>
            ))}
          </Slider>
        </div>
        <br />
      </div>
    </div>
  );
}
