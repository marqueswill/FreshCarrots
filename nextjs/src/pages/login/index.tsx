import styles from "@/styles/Login.module.css";

export function handleLogin() {}

export default function LoginPage() {
  return (
    <div className={styles.page}>
      <div className={styles.login_box}>
        <img src="/images/logomark.png" alt="" className={styles.logo} />
        <form action="" className={styles.form}>
          <span className={styles.span_input}>
            <label htmlFor="" className={styles.label}>Email:</label>
            <input
              type="email"
              className={styles.input}
              placeholder="Digite aqui"
            />
          </span>
          <span className={styles.span_input}>
            <label htmlFor="" className={styles.label}>Senha:</label>
            <input
              type="password"
              className={styles.input}
              placeholder="Digite aqui"
            />
          </span>
          {/* <span>Continuar com o google</span> */}
          <a href="/register" className={styles.a}>
            Não tenho conta
          </a>
          <button className={styles.button} onClick={handleLogin}>
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
