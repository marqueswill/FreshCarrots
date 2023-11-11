import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Book, BookShelf } from "./_app";
import Carousel from "@/components/Carousel";

const inter = Inter({ subsets: ["latin"] });

let livro1: Book = {
  thumbnail: "images/book.png",
  category: "Engenharias e tecnologia",
};

let estante: BookShelf = {
  category: "Engenharia e tecnologias",
  books: [
    livro1,
    livro1,
    livro1,
    livro1,
    livro1,
    livro1,
    livro1,
    livro1,
    livro1,
    livro1,
    livro1,
    livro1,
    livro1,
    livro1,
    livro1,
  ],
};

export default function Home() {
  return (
    <>
      <Head>
        <title>FreshCarrots</title>
      </Head>
      <body>
        <div id="parent" className={styles.main}>
          <Carousel bookShelf={estante}/>
        </div>
      </body>
    </>
  );
}
