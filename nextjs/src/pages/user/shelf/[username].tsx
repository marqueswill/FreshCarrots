import CardApproval from "@/components/CardApproval";
import { User, Book, UserBook, BookRequest } from "@/types/types";
import styles from "@/styles/UserShelf.module.css";
import ShowUserBook from "@/components/ShowUserBook";

export default function Shelf() {
  const user1: User = {
    name: "João da Silva Júnior",
    title: "Bookworm",
    image: "/images/generic_user.png",
    score: 69,
    course: "Química",
    college: "UnB",
    email: "joaosilvanaoexisto@gmail.com",
  };

  const user2: User = {
    name: "João da Silva Júnior",
    title: "Bookworm",
    image: "/images/generic_user.png",
    score: 69,
    course: "Química",
    college: "UnB",
    email: "joaosilvanaoexisto@gmail.com",
  };

  let book: Book = {
    isnb: "978-6555584059",
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
    user: user1,
    avaliability: new Map([
      ["borrow", false],
      ["trade", true],
    ]),
    condition: "Pouco usado",
    place: "UnB",
    solicitations: 3,
    status: "DISPONÍVEL",
  };

  const bookRequest: BookRequest = {
    id: 1,
    type: "Empréstimo",
    time: 14,
    start: "01/12/2023",
    end: "15/12/2023",
    lenderBook: userBook,
    lender: user1,
    borrower: user2,
  };

  return (
    <div className={styles.page}>
      <ShowUserBook userBook={userBook} />
      <CardApproval bookRequest={bookRequest} />
    </div>
  );
}
