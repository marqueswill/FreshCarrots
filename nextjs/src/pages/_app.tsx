import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
// import styles from "@/styles/App.module.css";
import type { AppProps } from "next/app";

type Book = {
  isnb?: number;
  title?: string;
  edition?: number;
  year?: number;
  category?: string;
  thumbnail?: string;
  grade?: number;
};

type BookShelf = {
  category?: string;
  books: Book[];
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} w />
      <Footer />
    </>
  );
}

export type { Book, BookShelf };
