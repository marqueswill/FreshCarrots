import { BookShelf, Category } from "@/types/types";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";

import styles from "@/styles/Carousel.module.css";
import Link from "next/link";

function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", fontSize: "100px", color: "red" }}
      onClick={onClick}
    >
      &gt;
    </div>
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      // className={className}
      style={{ ...style, display: "block", fontSize: "100px", color: "green" }}
      onClick={onClick}
    >
      &lt;
    </div>
  );
}

export default function Carousel({ shelf }: { shelf: Category }) {
  // const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  //   <img src={"images/icons/next_button.png"} alt="prevArrow" {...props} className={styles.arrows}/>
  // );

  // const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  //   <img src={"images/icons/prev_button.png"} alt="nextArrow" {...props} className={styles.arrows} onClick={any}/>
  // );

  const settings = {
    dots: true,
    // accessibility= true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    arrows: true,
    // nextArrow: <SlickArrowRight />,
    // prevArrow: <SlickArrowLeft />,
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
