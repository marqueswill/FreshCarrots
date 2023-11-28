import styles from "@/styles/BookRegister.module.css";
import { useSession } from "next-auth/react";
import Login from "@/pages/user/login";
import { useState } from "react";
import { register } from "module";
import { registerUserBook } from "@/lib/userBook";

export const handleRegister = async (props: {
  isbn: string;
  email: string;
  condition: string;
  period: number;
  forLoan: boolean;
  forTrade: boolean;
}) => {
  console.log(props);
  
  const res = await fetch(`http://localhost:8000/api/book/register`, {
    method: "POST",
    body: JSON.stringify({
      isbn: props.isbn,
      email: props.email,
      condition: props.condition,
      period: props.period,
      forLoan: props.forLoan,
      forTrade: props.forTrade,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    const data = await res.json();
    alert(data.message);
    window.location.href = `/user/profile/${props.email}`;
  } else {
    const data = await res.json();
    alert(data.error);
  }
};

export default function RegisterUserBookPage() {
  const { data: session } = useSession();

  const [isbn, setIsbn] = useState("");
  const [condition, setCondition] = useState("");
  const [period, setPeriod] = useState(0);
  const [forLoan, setForLoan] = useState(false);
  const [forTrade, setForTrade] = useState(false);
  // const [email, setEmail] = useState("");

  if (session && session.user) {
    return (
      <div className={styles.page}>
        <div className={styles.div}>
          <span className={styles.title}>
            <img
              src="/images/icons/books.png"
              alt=""
              className={styles.h1_image}
            />
            <h1 className={styles.h1}>Informações sobre empréstimo/troca</h1>
          </span>
          <form
            className={styles.form}
            onSubmit={(event) => {
              event.preventDefault();
              const data = {
                isbn: isbn,
                email: String(session.user?.email),
                condition: condition,
                forLoan: forLoan,
                forTrade: forTrade,
                period: period,
              };
              if (
                isbn != "" &&
                condition != "" &&
                period > 0 &&
                (forLoan || forTrade)
              ) {
                handleRegister(data);
              } else {
                alert("Todos campos devem ser preenchidos.");
              }
            }}
          >
            <div className={styles.lado_a_lado}>
              <span className={styles.input_span}>
                <label htmlFor="" className={styles.label}>
                  ISBN**
                </label>
                <input
                  type="text"
                  placeholder="Digite aqui"
                  className={styles.input_box_isbn}
                  id="isbn"
                  onChange={(event) => {
                    setIsbn(event.target.value);
                  }}
                />
              </span>
              <span className={styles.input_span}>
                <label htmlFor="" className={styles.label}>
                  Estado físico*
                </label>
                <input
                  type="text"
                  placeholder="Digite aqui"
                  className={styles.input_box_estado}
                  id="estado"
                  onChange={(event) => {
                    setCondition(event.target.value);
                  }}
                />
              </span>
            </div>
            <div className={styles.lado_a_lado}>
              <span className={styles.input_span}>
                <label htmlFor="" className={styles.label}>
                  Período máximo para empréstimo*
                </label>
                <span className={styles.number_span}>
                  <input
                    type="number"
                    min={1}
                    max={30}
                    placeholder="Digite aqui"
                    className={styles.input_box_periodo}
                    id="periodo"
                    onChange={(event) => {
                      setPeriod(Number(event.target.value));
                    }}
                  />
                  <p className={styles.label}>dia(s)</p>
                </span>
              </span>
              <span className={styles.input_span}>
                <label htmlFor="" className={styles.label}>
                  Disponibilidade*
                </label>
                <div className={styles.checkbox_div}>
                  <span className={styles.input_checkbox}>
                    <input
                      type="checkbox"
                      className={styles.checkbox}
                      id="emprestimo"
                      onChange={(event) => {
                        setForLoan(Boolean(event.target.checked));
                      }}
                    />
                    <label>Empréstimo</label>
                  </span>
                  <span className={styles.input_checkbox}>
                    <input
                      type="checkbox"
                      className={styles.checkbox}
                      id="troca"
                      onChange={(event) => {
                        setForTrade(Boolean(event.target.value));
                      }}
                    />
                    <label>Troca</label>
                  </span>
                </div>
              </span>
            </div>
            <div className={styles.buttons}>
              <button
                className={styles.cancel_button}
                onClick={() => {
                  window.location.href = `/`;
                }}
              >
                CANCELAR
              </button>
              <button type="submit" className={styles.register_button}>
                REGISTRAR
              </button>
            </div>
          </form>
          <p className={styles.obs}>
            * Campo obrigatório <br />
            ** Informações do livro já existem na base de dados
          </p>
        </div>
      </div>
    );
  } else {
    window.location.href = "/user/login";
  }
}

{
  /* <span className={styles.input_span}>
                <label htmlFor="" className={styles.label}>
                  Categoria*
                </label>
                <input
                  type="text"
                  placeholder="Digite aqui"
                  className={styles.input_box_categoria}
                  id="categoria"
                />
              </span> */
}

{
  /* <div className={styles.div}>
          <span className={styles.title}>
            <img
              src="/images/icons/books.png"
              alt=""
              className={styles.h1_image}
            />
            <h1 className={styles.h1}>Informações sobre o livro</h1>
          </span>
          <form action="" className={styles.form}>
            <span className={styles.input_span}>
              <label htmlFor="" className={styles.label}>
                Título*
              </label>
              <input
                type="text"
                placeholder="Digite aqui"
                className={styles.input_box_}
              />
            </span>
            <span className={styles.input_span}>
              <label htmlFor="" className={styles.label}>
                Autor*
              </label>
              <input
                type="text"
                placeholder="Digite aqui"
                className={styles.input_box_}
              />
            </span>
            <span className={styles.input_span}>
              <label htmlFor="" className={styles.label}>
                Ano*
              </label>
              <input
                type="text"
                placeholder="Digite aqui"
                className={styles.input_box_}
              />
            </span>
            <span className={styles.input_span}>
              <label htmlFor="" className={styles.label}>
                Edição*
              </label>
              <input
                type="text"
                placeholder="Digite aqui"
                className={styles.input_box_}
              />
            </span>
            <span className={styles.input_span}>
              <label htmlFor="" className={styles.label}>
                Idioma*
              </label>
              <input
                type="text"
                placeholder="Digite aqui"
                className={styles.input_box_}
              />
            </span>
            <span className={styles.input_span}>
              <label htmlFor="" className={styles.label}>
                Páginas*
              </label>
              <input
                type="text"
                placeholder="Digite aqui"
                className={styles.input_box_}
              />
            </span>
            <span className={styles.input_span}>
              <label htmlFor="" className={styles.label}>
                ISBN**
              </label>
              <input
                type="text"
                placeholder="Digite aqui"
                className={styles.input_box_}
              />
            </span>
          </form>
          <form action=""></form>
        </div> */
}
