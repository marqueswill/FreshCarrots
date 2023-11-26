import ShowUserBook from "@/components/ShowUserBook";
import styles from "@/styles/LoanRequest.module.css";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useState } from "react";
import { prisma } from "../../../../prisma/prisma";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Login from "@/pages/login";

export const getServerSideProps: GetServerSideProps<{
  userBook: any;
}> = async (context) => {
  const userBookId = Number(context.query.id);
  const userBook = await prisma.userBook.findUnique({
    where: { id: userBookId },
    include: { book: true, user: true },
  });

  return { props: { userBook } };
};

function Button({
  children,
  enable = false,
}: {
  children: React.ReactNode;
  enable?: boolean;
}) {
  if (enable != undefined && enable) {
    return (
      <button
        className={styles.request_button_true}
        onClick={() => {
          handleRequest;
        }}
      >
        {children}
      </button>
    );
  } else {
    return <button className={styles.request_button_false}>{children}</button>;
  }
}

function handleRequest() {}

export default function LoanRequestPage({
  userBook,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [isCheckd, setIsChecked] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();

  if (session && session.user) {
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
                  <input
                    type="date"
                    id="loanEnd"
                    className={styles.input_date}
                  />
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
                    Me comprometo a devolver o livro logo após o fim do período
                    de empréstimo e concordo e entendo que posso sofrer
                    penalidades caso atrase a entrega ou não devolva o livro.
                  </p>
                </div>
              </span>
            </div>
          </div>
          <br />
          <br />
          <div className={styles.actions}>
            <button
              className={styles.cancel_button}
              onClick={() => {
                window.location.href = `/book/bookpage/${userBook.isbn}`;
              }}
            >
              CANCELAR
            </button>
            <Button enable={isCheckd}>SOLICITAR</Button>
          </div>
          <br />
        </section>
      </div>
    );
  } else {
    return <Login />;
  }
}
