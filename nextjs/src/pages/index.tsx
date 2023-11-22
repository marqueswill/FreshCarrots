import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Book, Category, BookShelf } from "@/types/types";
import Carousel from "@/components/Carousel";

const inter = Inter({ subsets: ["latin"] });

let livro1: Book = {
  isnb: "978-6555584059",
  title: "Princípios de Sistemas de Informação",
  author: "George W. Reynolds",
  edition: 14,
  year: 2021,
  category: "Engenharias e Tecnologia",
  grade: 3.5,
  pages: 600,
  url: "/bookpage/1 ",
  language: "Português-Brasil",
  sinopse:
    "Sinopse: Esta edição de Princípios de sistemas de informação oferece a cobertura tradicional de conceitos de informática, mas coloca o material no contexto de atender às necessidades de empresas e organizações. Colocar os conceitos de sistemas de informação neste contexto e assumir uma perspectiva de gestão sempre diferenciou este livro de outros de informática, tornando-o atraente não apenas para os alunos com especialização em sistema de informação de gestão, mas também para estudantes de outras áreas de estudo. O texto não é excessivamente técnico, mas trata do papel desempenhado pelos sistemas de informação em uma organização e os princípios-chave que um gestor ou especialista em tecnologia precisa saber para ser bem-sucedido.",
  thumbnail: "images/book.png",
};

let categoria1: Category = {
  name: "Engenharia e tecnologias",
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
  ],
};

let categoria2: Category = {
  name: "Ciências Humanas",
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
  ],
};

let estante: BookShelf = {
  shelf: [categoria1, categoria2],
};

export default function Home() {
  return (
    <div className={styles.body}>
      {estante.shelf.map((categoria) => (
        <Carousel shelf={categoria} />
      ))}
    </div>
  );
}
