import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import { useState } from "react";
import SearchBar from "./SearchBar";
import Notification from "./Notification";
import SigninButton from "./SigninButton";
import SignInButton from "./SigninButton";

export default function Navbar() {
  const [loginButton, setLoginButton] = useState(false);
  const [notification, setNotification] = useState(false);

  return (
    <nav className={styles.nav_div}>
      <div className={styles.logo_div}>
        <Link href="/">
          <img
            src="/images/logomark.png"
            alt="freshcarrots"
            className={styles.logomark}
          />
        </Link>
      </div>
      <div className={styles.actions_div}>
        <ul className={styles.actions}>
          <li>
            <Link href="/registrar_troca" className={styles.link}>
              Registrar livro
            </Link>
          </li>
          <li>
            <Link href="/pesquisa" className={styles.link}>
              Navegar
            </Link>
          </li>
          <li>
            <SearchBar />
          </li>
          <li>
            <Notification state={notification} />
          </li>
          <li>
            {/* {!loginButton && (
              <span>
                {/* <Link href="/login" className={styles.link}> */}
                  {/*<img
                    src="/images/icons/user_login.png"
                    alt=""
                    className={styles.user_icon}
                  />{" "}*/}
                {/* </Link> 
              </span>
            )}  */}

            {/* {loginButton && (
              <span>
                <Link href="/restaurant" className={styles.link}>
                  <img src="" alt="" className="user_icon" />
                </Link>
              </span>
            )} */}

            <SigninButton/>
          </li>
        </ul>
      </div>
    </nav>
  );
}
