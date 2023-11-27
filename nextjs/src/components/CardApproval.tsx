import { getAvailability } from "@/lib/userBook";
import {} from "@/pages/_app";
import styles from "@/styles/CardApproval.module.css";

function handleAccept() {}
function handleReject() {}

export default function CardApproval({ bookRequest }: { bookRequest: any }) {
  return (
    <div className={styles.card}>
      <div className={styles.user_div}>
        <img
          src={bookRequest.borrower.image}
          alt=""
          className={styles.user_icon}
        />
        <div className={styles.user_info}>
          <h1 className={styles.user_name}>{bookRequest.borrower.name}</h1>
          <h2 className={styles.user_title}>{bookRequest.borrower.title}</h2>
          <div className={styles.score}>
            <img src="/images/carrot.png" className={styles.score_icon} />
            <p className={styles.score_value}>{bookRequest.borrower.score}%</p>
          </div>
        </div>
      </div>

      <div className={styles.book_div}>
        <div className={styles.book_info}>
          <ul className={styles.info_label}>
            <li>Curso:</li>
            <li>Faculdade:</li>
            <li>Disponibilidade:</li>
            <li>Tempo:</li>
            <li>Data:</li>
          </ul>
          <ul className={styles.info_data}>
            <li>{bookRequest.borrower.course}</li>
            <li>{bookRequest.borrower.college}</li>
            <li>
              {getAvailability([
                bookRequest.lenderBook.forLoan,
                bookRequest.lenderBook.forTrade,
              ])}
            </li>
            <li>{bookRequest.time} dia(s)</li>
            <li>{bookRequest.start + " - " + bookRequest.end}</li>
          </ul>
        </div>
      </div>

      <div className={styles.actions}>
        <button
          onClick={() => {
            handleReject;
          }}
          className={styles.button}
        >
          <img src="/images/icons/reject.png" alt="" />
        </button>
        <button
          onClick={() => {
            handleAccept;
          }}
          className={styles.button}
        >
          <img src="/images/icons/accept.png" alt="" />
        </button>
      </div>
    </div>
  );
}
