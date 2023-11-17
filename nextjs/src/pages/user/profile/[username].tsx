import UserShelf from "@/components/UserShelf";
import styles from "@/styles/UserPage.module.css";
import Link from "next/link";
import Notification from "@/components/Notification";
import Image from "next/image";
import { Book, User, UserBook } from "@/types/types";

export default function UserPage() {
  const user: User = {
    name: "João da Silva Júnior",
    title: "Bookworm",
    image: "/images/generic_user.png",
    score: 69,
    course: "Química",
    college: "UnB",
    email: "joaosilvanaoexisto@gmail.com",
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

  const userShelf = [
    userBook,
    userBook,
    userBook,
    userBook,
    userBook,
    userBook,
    userBook,
    userBook,
    userBook,
  ];

  const notification = false;

  return (
    <div className={styles.page}>
      <div className={styles.user_page}>
        <section className={styles.user_section}>
          <div className={styles.left_user_section}>
            <div className={styles.actions}>
              <Link href="/">
                <img
                  src="/images/icons/home.png"
                  alt="home"
                  className={styles.icon}
                />
              </Link>
              <img
                src="/images/icons/message.png"
                alt=""
                className={styles.icon}
              />
              <Notification state={false} />
            </div>
            <div className={styles.user_icon_score}>
              <div>
                <img
                  src={user.image}
                  alt={user.name}
                  className={styles.user_icon}
                />
              </div>
            </div>
          </div>
          <div className={styles.right_user_section}>
            <div className={styles.text_info}>
              <h1 className={styles.user_name}>{user.name}</h1>
              <h2 className={styles.user_title}>{user.title}</h2>
              <h3 className={styles.user_info}>
                <b>Email:</b> {user.email}
              </h3>
              <h3 className={styles.user_info}>
                <b>Faculdade:</b> {user.college}
              </h3>
              <h3 className={styles.user_info}>
                <b>Curso:</b> {user.course}
              </h3>
            </div>
          </div>
        </section>
        <div>
          <img src="/images/divisoria.png" className={styles.divisoria} />
        </div>
        <section className={styles.shelf_section}>
          <UserShelf shelf={userShelf} />
        </section>
      </div>
    </div>
  );
}
