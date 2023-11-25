import styles from "@/styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer_div}>
      <div className={styles.div}>
        <h1 className={styles.h1}>Sobre</h1>
        <p className={styles.text}>
          FreshCarrots é um site criado por universitário para universitários,
          nosso objetivo é possibilitar que todos tenham fácil acesso a livros
          acadêmicos de qualidade.
        </p>
      </div>
      <div className={styles.div_sobre}>
        <h1 className={styles.h1}>Contato</h1>
        <ul className={styles.ul_social}>
          {" "}
          <li className={styles.li}>
            <Link href="#">
              <img
                className={styles.social_media_icon}
                src="/images/icons/instagram.png"
                alt=""
              />
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="#">
              <img
                className={styles.social_media_icon}
                src="/images/icons/facebook.png"
                alt=""
              />
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="#">
              <img
                className={styles.social_media_icon}
                src="/images/icons/whatsapp.png"
                alt=""
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.div}>
        <h1 className={styles.h1}>Explorar</h1>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href="#" className={styles.a}>
              Busca avançada
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="#" className={styles.a}>
              Meu perfil
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="#" className={styles.a}>
              Registrar livro
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="#" className={styles.a}>
              Avaliação
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.div}>
        <h1 className={styles.h1}>Ajuda</h1>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href="#" className={styles.a}>
              Centro de Ajuda
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="#" className={styles.a}>
              Reportar problema
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="#" className={styles.a}>
              Sugerir mudanças
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
