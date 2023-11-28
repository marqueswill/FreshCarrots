import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";

import styles from "@/styles/Carousel.module.css";
import Link from "next/link";
import { JsonObject } from "@prisma/client/runtime/library";
import { Book } from "../../prisma/prisma";

export default function Carousel({ category }: { category: any }) {
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
        <h1 className={styles.category}>Engenharia e Tecnologias:</h1>

        <div className={styles.row}>
          <Slider {...settings} className={styles.slider}>
            {category.map((book: any) => {
              return (
                <div>
                  <Link href={`/book/bookpage/${book.isbn}`}>
                    <img
                      src={`/images/thumbnails/${book.isbn}.png`}
                      className={styles.thumbnail}
                    />
                  </Link>
                </div>
              );
            })}
          </Slider>
        </div>
        <br />
      </div>
    </div>
  );
}
