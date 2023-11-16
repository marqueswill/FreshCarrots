import {} from "@/pages/_app";
import styles from "@/styles/Card.module.css";
import { User, UserBook } from "@/types/types";
import Link from "next/link";

function Button({ text, enable }: { text: string; enable: boolean }) {
  if (enable != undefined){if (enable) {
    return (
      <Link href="" className={styles.button_true}>
        {text}
      </Link>
    );
  } else {
    return (
      <div>
        <p className={styles.button_false}>{text}</p>
      </div>
    );
  }}
}

export default function Card(props: { userBook: UserBook; user: User }) {
  const getAvailability = (availability: Map<string, boolean>) => {
    if (Array.from(availability.values()).every((value) => value === true)) {
      return "Empréstimo ou Troca";
    } else if (availability.get("trade")) {
      return "Troca";
    } else if (availability.get("borrow")) {
      return "Empréstimo";
    } else {
      return "Indisponível";
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.book_div}>
        <div className={styles.cover_div}>
          <img
            src={props.userBook.info.thumbnail}
            className={styles.thumbnail}
          />
        </div>
        <div className={styles.info_div}>
          <div>
            <h1 className={styles.book_title}>{props.userBook.info.title}</h1>
            <h2 className={styles.book_author}>{props.userBook.info.author}</h2>
          </div>
          <table className={styles.book_info}>
            <tbody>
              <tr>
                <td className={styles.table_cell}>
                  <b>Disponibilidade:</b>
                </td>
                <td className={styles.table_cell}>
                  {getAvailability(props.userBook.avaliability)}
                </td>
              </tr>
              <tr>
                <td className={styles.table_cell}>
                  <b>Condição</b>
                </td>
                <td className={styles.table_cell}>
                  {props.userBook.condition}
                </td>
              </tr>
              <tr>
                <td className={styles.table_cell}>
                  <b>Faculdade:</b>
                </td>
                <td className={styles.table_cell}>{props.userBook.place}</td>
              </tr>
              <tr>
                <td className={styles.table_cell}>
                  <b>Solicitações:</b>
                </td>
                <td className={styles.table_cell}>
                  {props.userBook.solicitations}
                </td>
              </tr>
              <tr>
                <td className={styles.table_cell}>
                  <b>Status:</b>
                </td>
                <td className={styles.table_cell}>{props.userBook.status}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.user_div}>
        <div className={styles.user_info}>
          <img src={props.user.image} alt="" className={styles.user_icon} />
          <div>
            <h1 className={styles.user_name}>{props.user.name}</h1>
            <h2 className={styles.user_title}>{props.user.title}</h2>
          </div>
          <div className={styles.score}>
            <img src="/images/carrot.png" alt="" className={styles.score_icon} />
            <p className={styles.score_value}>{props.user.score}%</p>
          </div>
        </div>
        <div className={styles.actions}>
          <Button
            text="Empréstimo"
            enable={props.userBook.avaliability.get("borrow")}
          />
          <Button
            text="Troca"
            enable={props.userBook.avaliability.get("trade")}
          />
        </div>
      </div>
    </div>
  );
}
