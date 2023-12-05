import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import styles from "@/styles/UserShelf.module.css";

function deleteUserBook() {}

export default function UserShelf({ shelf }: { shelf: any }) {
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
      <table className={styles.table}>
        <tbody>
          <tr className={styles.labels}>
            <td className={styles.column1}>ID</td>
            <td className={styles.column2}>Capa</td>
            <td className={styles.column3}>Título</td>
            <td className={styles.column4}>Condição</td>
            <td className={styles.column5}>Nº Pedidos</td>
            <td className={styles.column6}>
              {/* <button className={styles.button}>
                <img
                  src="/images/icons/remove.png"
                  alt="remove"
                  className={styles.action}
                />
              </button> */}
            </td>
          </tr>

          {shelf.map((userBook: any) => {
            return (
              <tr className={styles.lines}>
                <td className={styles.column1}>{userBook.id}</td>
                <td className={styles.column2}>
                  <img
                    src={`/images/thumbnails/${userBook.book.isbn}.png`}
                    alt={userBook.book.title}
                    className={styles.thumbnail}
                  />
                </td>
                <td className={styles.column3}>{userBook.book.title}</td>
                <td className={styles.column4}>{userBook.condition}</td>
                <td className={styles.column5}>{userBook.solicitations}</td>
                <td className={styles.column6}>
                  <button className={styles.button}>
                    <img
                      src="/images/icons/navigate.png"
                      alt="navigate"
                      className={styles.action}
                      onClick={() => {
                        window.location.href = `/user/profile/${userBook.user.email}/userbook/${userBook.id}`;
                      }}
                    />
                  </button>
                  {/* <button className={styles.button}>
                    <img
                      src="/images/icons/edit.png"
                      alt="edit"
                      className={styles.action}
                      // onClick={() => {
                      //   window.location.href = `/user/profile/${userBook.user.email}/userbook/${userBook.book.isbn}`;
                      // }}
                    />
                  </button> */}
                  {/* <button className={styles.button}>
                    <img
                      src="/images/icons/remove.png"
                      alt="remove"
                      className={styles.action}
                      onClick={(event) => {
                        deleteUserBook;
                      }}
                    />
                  </button> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
