import styles from "@/styles/Login.module.css";

export function handleSignin() {}

export default function LoginPage() {
  return (
    <div className={styles.page}>
      <div className={styles.login_box}>
        <img src="/images/logomark.png" alt="" className={styles.logo} />
        <form action="" className={styles.form}>
          <h1>Dados pessoais</h1>
          <span className={styles.span_input}>
            <label htmlFor="" className={styles.label}>
              Nome:
            </label>
            <input
              type="text"
              className={styles.input}
              placeholder="Digite aqui"
            />
          </span>
          <span className={styles.span_input}>
            <label htmlFor="" className={styles.label}>
              CPF:
            </label>
            <input
              type="text"
              className={styles.input}
              placeholder="Digite aqui"
            />
          </span>
          <span className={styles.span_input}>
            <label htmlFor="" className={styles.label}>
              Faculdade:
            </label>
            <input
              type="text"
              className={styles.input}
              placeholder="Digite aqui"
            />
          </span>
          <span className={styles.span_input}>
            <label htmlFor="" className={styles.label}>
              Curso:
            </label>
            <input
              type="text"
              className={styles.input}
              placeholder="Digite aqui"
            />
          </span>

          <br />
          <h1>Dados de login</h1>
          <span className={styles.span_input}>
            <label htmlFor="" className={styles.label}>
              Email:
            </label>
            <input
              type="email"
              className={styles.input}
              placeholder="Digite aqui"
            />
          </span>
          <span className={styles.span_input}>
            <label htmlFor="" className={styles.label}>
              Nome de usuário:
            </label>
            <input
              type="text"
              className={styles.input}
              placeholder="Digite aqui"
            />
          </span>
          <span className={styles.span_input}>
            <label htmlFor="" className={styles.label}>
              Senha:
            </label>
            <input
              type="password"
              className={styles.input}
              placeholder="Digite aqui"
            />
          </span>
          <span className={styles.span_input}>
            <label htmlFor="" className={styles.label}>
              Confirme a senha:
            </label>
            <input
              type="password"
              className={styles.input}
              placeholder="Digite aqui"
            />
          </span>
          {/* <span>Continuar com o google</span> */}
          <a href="/user/login" className={styles.a}>
            Já tenho conta
          </a>
          <button className={styles.button} onClick={handleSignin}>
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}
