import ShowUserBook from "@/components/ShowUserBook";
import { User, Book, UserBook } from "@/types/types";
import styles from "@/styles/LoanRequest.module.css";
import { useState } from "react";

export default function LoanRequestPage() {
  let user: User = {
    name: "José da Silva",
    title: "Bookwork",
    image: "/images/user_icon.png",
    score: 100,
    email: "email@gmail.com",
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

  function Button({
    children,
    enable = false,
  }: {
    children: React.ReactNode;
    enable?: boolean;
  }) {
    if (enable != undefined) {
      if (enable) {
        return <button className={styles.request_button_true}>{children}</button>;
      } else {
        return <button className={styles.request_button_false}>{children}</button>;
      }
    } else {
      return <button className={styles.request_button_false}>{children}</button>;
    }
  }

  const [isCheckd, setIsChecked] = useState(false);
  return (
    <div className={styles.page}>
      <section className={styles.book_info}>
        <ShowUserBook userBook={userBook} />
      </section>
      <section className={styles.loan_request}>
        <h1 className={styles.h1}>
          <img src="/images/icons/books.png" className={styles.icon} />
          Solicitar empréstimo:
        </h1>
        <div className={styles.bottom_div}>
          <div className={styles.form_div}>
            <h2 className={styles.h2}>Período de empréstimo:</h2>
            <form action="" className={styles.form}>
              <span className={styles.datepicker_div}>
                <label htmlFor="">Início:</label>
                <input
                  type="date"
                  id="loanBegin"
                  className={styles.input_date}
                />
              </span>
              <span className={styles.datepicker_div}>
                <label htmlFor="">Fim:</label>
                <input type="date" id="loanEnd" className={styles.input_date} />
              </span>
            </form>
          </div>
          <div className={styles.form_div}>
            <span className={styles.confirmation_div}>
              <h2 className={styles.h2}>Confirmação:</h2>
              <div className={styles.checkbox_div}>
                <input
                  type="checkbox"
                  id="request"
                  name="loanRequest"
                  className={styles.input_checkbox}
                  onChange={(event) => {
                    setIsChecked(event.target.checked);
                  }}
                />
                <p className={styles.p}>
                  Me comprometo a devolver o livro logo após o fim do período de
                  empréstimo e concordo e entendo que posso sofrer penalidades
                  caso atrase a entrega ou não devolva o livro.
                </p>
              </div>
            </span>
          </div>
        </div>
        <div className={styles.actions}>
          <button className={styles.cancel_button}>CANCELAR</button>
          <Button enable={isCheckd}>SOLICITAR</Button>
        </div>
      </section>
    </div>
  );
}
