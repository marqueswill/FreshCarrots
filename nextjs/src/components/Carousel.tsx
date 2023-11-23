import { Category } from "@/types/types";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";

import styles from "@/styles/Carousel.module.css";
import Link from "next/link";
import { JsonObject } from "@prisma/client/runtime/library";

export default function Carousel({ category }: { category: JsonObject }) {
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
        {/* <h1 className={styles.category}>{shelf.name}:</h1> */}
        <h1 className={styles.category}>Disponíveis:</h1>

        <div className={styles.row}>
          <Slider {...settings} className={styles.slider}>
            {category.map((item: any) => (
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
