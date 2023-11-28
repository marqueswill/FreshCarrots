import ShowUserBook from "@/components/ShowUserBook";
import styles from "@/styles/LoanRequest.module.css";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useState } from "react";
import { prisma } from "../../../../prisma/prisma";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Login from "@/pages/user/login";

export const handleRequest = async (props: {
  period: number;
  lenderBookId: number;
  borrowerEmail: string;
}) => {
  console.log(props);
  const res = await fetch(`/api/request/loan`, {
    method: "POST",
    body: JSON.stringify({
      period: props.period,
      status: "Pendente",
      lenderBookId: props.lenderBookId,
      borrowerEmail: props.borrowerEmail,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    const data = await res.json();
    alert(data.message);
    window.location.href = "/";
  } else {
    const data = await res.json();
    alert(data.message);
  }
};

export const getServerSideProps: GetServerSideProps<{
  userBook: any;
}> = async (context) => {
  const userBookId = Number(context.query.userBookId);
  const userBook = await prisma.userBook.findUnique({
    where: { id: userBookId },
    include: { book: true, user: true },
  });

  return { props: { userBook } };
};

export default function LoanRequestPage({
  userBook,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [isCheckd, setIsChecked] = useState(false);
  const [period, setPeriod] = useState(0);

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
              <form action="" className={styles.form}>
                <div className={styles.inputs}>
                  <span className={styles.datepicker_div}>
                    <h2 className={styles.h2}>Período de empréstimo:</h2>
                    <span className={styles.lado_a_lado}>
                      <input
                        type="number"
                        min={1}
                        max={userBook.maxPeriod}
                        id="loanPeriod"
                        value={period}
                        placeholder="Nº dias"
                        className={styles.input_period}
                        onChange={(event) => {
                          setPeriod(Number(event.target.value));
                        }}
                      />
                      <label htmlFor="">dia(s)</label>
                    </span>
                  </span>

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
                        Me comprometo a devolver o livro logo após o fim do
                        período de empréstimo e concordo e entendo que posso
                        sofrer penalidades caso atrase a entrega ou não devolva
                        o livro.
                      </p>
                    </div>
                  </span>
                </div>
                <div className={styles.actions}>
                  <button
                    className={styles.cancel_button}
                    onClick={() => {
                      window.location.href = `/book/bookpage/${userBook.isbn}`;
                    }}
                  >
                    CANCELAR
                  </button>
                  {isCheckd && (
                    <button
                      type="submit"
                      className={styles.request_button_true}
                      onClick={(event) => {
                        event.preventDefault();
                        handleRequest({
                          period: period,
                          borrowerEmail: String(session.user?.email),
                          lenderBookId: Number(router.query.userBookId),
                        });
                      }}
                    >
                      SOLICITAR
                    </button>
                  )}

                  {!isCheckd && (
                    <button className={styles.request_button_false}>
                      SOLICITAR
                    </button>
                  )}
                </div>
              </form>
              {/* <form action="" className={styles.form}>
                <span className={styles.datepicker_div}>
                  <label htmlFor="">Início:</label>
                  <input
                    type="date"
                    id="loanBegin"
                    className={styles.input_date}
                    onChange={(event) => {
                      setBegin(event.target.value);
                    }}
                  />
                </span>
                <span className={styles.datepicker_div}>
                  <label htmlFor="">Fim:</label>
                  <input
                    type="date"
                    id="loanEnd"
                    className={styles.input_date}
                    onChange={(event) => {
                      setEnd(event.target.value);
                    }}
                  />
                </span>
              </form> */}
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    return <Login />;
  }
}
