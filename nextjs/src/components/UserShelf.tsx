import { BookShelf, Category, UserBook } from "@/types/types";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";

import styles from "@/styles/UserShelf.module.css";
import Link from "next/link";

export default function UserShelf({ shelf }: { shelf: UserBook[] }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    
  };

  return (
    <div className={styles.estante}>
      <h1 className={styles.h1}>Estante</h1>

      {/* <div className={styles.row}>
        <Slider {...settings} className={styles.slider}>
          {shelf.map((book) => (
            <div className={styles.book_slide}>
              <Link href={`/user/userbook/${book.id}`} className={styles.link}>
                <img
                  src={book.book.thumbnail}
                  alt="slider"
                  className={styles.thumbnail}
                />
              </Link>

              <h1>{book.book.title}</h1>
            </div>
          ))}
        </Slider>
      </div> */}      
      
    </div>
  );
}
