import styles from "@/styles/ShowUserBook.module.css";
import { getAvailability } from "@/lib/userBook";

export default function ShowUserBook({ userBook }: { userBook: any }) {
  return (
    <section className={styles.info_section}>
      <h1 className={styles.h1}>
        <img src="/images/icons/info.png" alt="info" className={styles.icon} />
        Informações sobre o livro
      </h1>
      <div className={styles.book_div}>
        <div className={styles.book_images}>
          <img src="/images/book.png" className={styles.book_thumbnail} />
          <img src="/images/star_example.png" className={styles.avaliation} />
        </div>
        <div className={styles.book_info}>
          <ul className={styles.info_label}>
            <li>Título:</li>
            <li>Autor:</li>
            <li>Edição</li>
            <li>Ano:</li>
            <li>Nº de páginas:</li>
            <li>Idioma:</li>
            <li>ISBN:</li>
            <li>Categoria:</li>
            <li>
              <br />
            </li>
            <li>Local:</li>
            <li>Estado físico:</li>
            <li>Disponibilidade:</li>
          </ul>
          <br />
          <ul className={styles.info_data}>
            <li>{userBook.book.title} </li>
            <li>{userBook.book.author} </li>
            <li>{userBook.book.edition}ª edição</li>
            <li>{userBook.book.year}</li>
            <li>{userBook.book.pages} páginas</li>
            <li>{userBook.book.language}</li>
            <li>{userBook.book.isbn}</li>
            <li>{userBook.book.category} </li>
            <li>
              <br />
            </li>
            <li>{userBook.user.college} </li>
            <li>{userBook.condition}</li>
            <li>{getAvailability([userBook.forLoan,userBook.forTrade])}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
