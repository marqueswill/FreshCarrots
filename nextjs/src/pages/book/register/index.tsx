import styles from "@/styles/BookRegister.module.css";
export default function () {
  return (
    <div className={styles.page}>
      <div className={styles.div}>
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
              className={styles.input_box}
            />
          </span>
          <span className={styles.input_span}>
            <label htmlFor="" className={styles.label}>
              Autor*
            </label>
            <input
              type="text"
              placeholder="Digite aqui"
              className={styles.input_box}
            />
          </span>
          <span className={styles.input_span}>
            <label htmlFor="" className={styles.label}>
              Ano*
            </label>
            <input
              type="text"
              placeholder="Digite aqui"
              className={styles.input_box}
            />
          </span>
          <span className={styles.input_span}>
            <label htmlFor="" className={styles.label}>
              Edição*
            </label>
            <input
              type="text"
              placeholder="Digite aqui"
              className={styles.input_box}
            />
          </span>
          <span className={styles.input_span}>
            <label htmlFor="" className={styles.label}>
              Idioma*
            </label>
            <input
              type="text"
              placeholder="Digite aqui"
              className={styles.input_box}
            />
          </span>
          <span className={styles.input_span}>
            <label htmlFor="" className={styles.label}>
              Páginas*
            </label>
            <input
              type="text"
              placeholder="Digite aqui"
              className={styles.input_box}
            />
          </span>
          <span className={styles.input_span}>
            <label htmlFor="" className={styles.label}>
              ISBN**
            </label>
            <input
              type="text"
              placeholder="Digite aqui"
              className={styles.input_box}
            />
          </span>
        </form>
        <form action=""></form>
      </div>
      <div className={styles.div}>
        <span className={styles.input_span}>
          <img src="" alt="" />
          <h1 className={styles.h1}>Informações sobre empréstimo/troca</h1>
        </span>
        <form action="" className={styles.form}>
          {" "}
          <span className={styles.input_span}>
            <label htmlFor="" className={styles.label}>
              Disponibilidade*
            </label>
            <div className={styles.checkbox_div}>
              <span className={styles.input_checkbox}>
                <input type="checkbox" className={styles.checkbox} />
                <p>Empréstimo</p>
              </span>
              <span className={styles.input_checkbox}>
                <input type="checkbox" className={styles.checkbox} />
                <p>Troca</p>
              </span>
            </div>
          </span>
          <span className={styles.input_span}>
            <label htmlFor="" className={styles.label}>
              Categoria*
            </label>
            <input
              type="text"
              placeholder="Digite aqui"
              className={styles.input_box}
            />
          </span>
          <span className={styles.input_span}>
            <label htmlFor="" className={styles.label}>
              Estado físico*
            </label>
            <input
              type="text"
              placeholder="Digite aqui"
              className={styles.input_box}
            />
          </span>
          <span className={styles.input_span}>
            <label htmlFor="" className={styles.label}>
              Período máximo para empréstimo*
            </label>
            <input
              type="text"
              placeholder="Digite aqui"
              className={styles.input_box}
            />
          </span>
          <span className={styles.input_span}>
            <label htmlFor="" className={styles.label}>
              Observações
            </label>
            <input
              type="text"
              placeholder="Digite aqui"
              className={styles.input_box}
            />
          </span>
        </form>
      </div>
    </div>
  );
}
