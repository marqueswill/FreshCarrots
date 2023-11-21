import {} from "@/pages/_app";
import styles from "@/styles/CardApproval.module.css";
import { BookRequest, User, UserBook } from "@/types/types";

export default function CardApproval(props: { bookRequest: BookRequest }) {
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
      <div className={styles.user_div}>
        <img
          src={props.bookRequest.borrower.image}
          alt=""
          className={styles.user_icon}
        />
        <div className={styles.user_info}>
          <h1 className={styles.user_name}>
            {props.bookRequest.borrower.name}
          </h1>
          <h2 className={styles.user_title}>
            {props.bookRequest.borrower.title}
          </h2>
          <div className={styles.score}>
            <img
              src="/images/carrot.png"
              alt=""
              className={styles.score_icon}
            />
            <p className={styles.score_value}>
              {props.bookRequest.borrower.score}%
            </p>
          </div>
        </div>
      </div>

      <div className={styles.book_div}>
        <div className={styles.book_info}>
          <ul className={styles.info_label}>
            <li>Curso:</li>
            <li>Faculdade:</li>
            <li>Tipo:</li>
            <li>Tempo:</li>
            <li>Data:</li>
          </ul>
          <ul className={styles.info_data}>
            <li>{props.bookRequest.borrower.course}</li>
            <li>{props.bookRequest.borrower.college}</li>
            <li>{props.bookRequest.type}</li>
            <li>{props.bookRequest.time} dia(s)</li>
            <li>{props.bookRequest.start + " - " + props.bookRequest.end}</li>
          </ul>
        </div>
      </div>

      <div className={styles.actions}>
        <button onClick={() => {}} className={styles.button}>
          <img src="/images/icons/reject.png" alt="" />
        </button>
        <button onClick={() => {}} className={styles.button}>
          <img src="/images/icons/accept.png" alt="" />
        </button>
      </div>
    </div>
  );
}
