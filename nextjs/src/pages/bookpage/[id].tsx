import Link from "next/link";
import { Book, User, UserBook } from "@/types/types";
import styles from "@/styles/BookPage.module.css";
import CardRequest from "@/components/CardRequest";

let user: User = {
  name: "José da Silva",
  title: "Bookwork",
  image: "/images/user_icon.png",
  score: 100,
  email: "email@gmail.com"
};

let book: Book = {
  isnb: 9786555584059,
  title: "Princípios de Sistemas de Informação",
  author: "George W. Reynolds",
  edition: 14,
  year: 2021,
  category: "Engenharias e Tecnologia",
  grade: 3.5,
  pages: 600,
  url: "/",
  language: "Português-Brasil",
  sinopse:
    "Esta edição de Princípios de sistemas de informação oferece a cobertura tradicional de conceitos de informática, mas coloca o material no contexto de atender às necessidades de empresas e organizações. Colocar os conceitos de sistemas de informação neste contexto e assumir uma perspectiva de gestão sempre diferenciou este livro de outros de informática, tornando-o atraente não apenas para os alunos com especialização em sistema de informação de gestão, mas também para estudantes de outras áreas de estudo. O texto não é excessivamente técnico, mas trata do papel desempenhado pelos sistemas de informação em uma organização e os princípios-chave que um gestor ou especialista em tecnologia precisa saber para ser bem-sucedido.",
  thumbnail: "/images/book.png",
};

let userBook: UserBook = {
  id: 1,
  book: book,
  user: user,
  avaliability: new Map([
    ["borrow", false],
    ["trade", true],
  ]),
  condition: "Pouco usado",
  place: "UnB",
  solicitations: 3,
  status: "DISPONÍVEL",
};

export default function BookPage() {
  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.bookpage}>
      <section className={styles.book_section}>
        <div className={styles.total_div}>
          <div className={styles.top_div}>
            <div className={styles.images}>
              <img
                src={book.thumbnail}
                alt={book.title}
                className={styles.thumbnail}
              />
              <img src="/images/star_example.png" className={styles.stars} />
            </div>
            <div className={styles.info}>
              <div>
                <h1 className={styles.title}>{book.title}</h1>
                <h3 className={styles.author}>{book.author}</h3>
              </div>
              <table>
                  <tr>
                    <td>
                      <b>Edição:</b>
                    </td>
                    <td>{book.edition}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Páginas:</b>
                    </td>
                    <td>{book.pages}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Idioma:</b>
                    </td>
                    <td>{book.language}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>ISBN:</b>
                    </td>
                    <td>{book.isnb}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Categoria:</b>
                    </td>
                    <td>{book.category}</td>
                  </tr>
              </table>
              <p className={styles.sinopse}>
                <b>Sinopse:</b> {book.sinopse}
              </p>
            </div>
          </div>
          <div className={styles.bottom_div}>
            <Link href="" className={styles.button}>
              <img src="/images/icons/avaliation.png" />
              Avaliações
            </Link>
            <Link href="" className={styles.button}>
              <img src="/images/icons/avaliable.png" />
              Disponíveis
            </Link>
            <Link href="" className={styles.button}>
              <img src="/images/icons/register.png" />
              Registrar exemplar
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.avaliable_section}>
        <CardRequest user={user} userBook={userBook} />
      </section>
    </div>
  );
}
