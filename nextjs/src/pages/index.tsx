import styles from "@/styles/Home.module.css";
// import { Book, Category, BookShelf } from "@/types/types";
import Carousel from "@/components/Carousel";
import { Book } from "../../prisma/prisma";
import { getCategory } from "@/lib/book";

let livro: Book = {
  isbn: "655558405X",
  title: "Princípios de Sistemas de Informação",
  author: "George W. Reynolds",
  edition: 14,
  year: 2021,
  category: "Engenharias e Tecnologia",
  grade: 3.5,
  pages: 600,
  language: "Português-Brasil",
  sinopse:
    "Sinopse: Esta edição de Princípios de sistemas de informação oferece a cobertura tradicional de conceitos de informática, mas coloca o material no contexto de atender às necessidades de empresas e organizações. Colocar os conceitos de sistemas de informação neste contexto e assumir uma perspectiva de gestão sempre diferenciou este livro de outros de informática, tornando-o atraente não apenas para os alunos com especialização em sistema de informação de gestão, mas também para estudantes de outras áreas de estudo. O texto não é excessivamente técnico, mas trata do papel desempenhado pelos sistemas de informação em uma organização e os princípios-chave que um gestor ou especialista em tecnologia precisa saber para ser bem-sucedido.",
};

// const categorias = [
//   "Ciências sociais e humanas",
//   "Ciências exatas e da terra",
//   "Engenharias e tecnologia",
//   "Ciências da Saúde",
//   "Ciências biológicas",
//   "Artes, Letras e Linguística",
// ];

// const estante = await getCategory();


export default function Home() {
  return (
    <div className={styles.body}>
      {estante.map((categoria) => (
        <Carousel category={categoria} />
      ))}
    </div>
  );
}
