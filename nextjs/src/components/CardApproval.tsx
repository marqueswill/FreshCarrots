import { getAvailability } from "@/lib/userBook";
import styles from "@/styles/CardApproval.module.css";
import { error } from "console";

export const handleAccept = async (bookRequest: any) => {
  console.log(bookRequest);
  const res = await fetch(`/api/request/loan`, {
    method: "PUT",
    body: JSON.stringify({
      id: bookRequest.id,
      status: "Aceito",
    }),
    headers: { "Content-Type": "application/json" },
  });
  window.location.reload()
};

export const handleReject = async (bookRequest: any) => {
  console.log(bookRequest);
  const res = await fetch(`/api/request/loan`, {
    method: "PUT",
    body: JSON.stringify({
      id: bookRequest.id,
      status: "Rejeitado",
    }),
    headers: { "Content-Type": "application/json" },
  });
  window.location.reload()
};

export default function CardApproval({ bookRequest }: { bookRequest: any }) {
  return (
    <div className={styles.card}>
      <div className={styles.user_div}>
        <img src={bookRequest.Borrower.image} className={styles.user_icon} />
        <div className={styles.user_info}>
          <h1 className={styles.user_name}>{bookRequest.Borrower.name}</h1>
          <h2 className={styles.user_title}>{bookRequest.Borrower.title}</h2>
          <div className={styles.score}>
            <img src="/images/carrot.png" className={styles.score_icon} />
            <p className={styles.score_value}>{bookRequest.Borrower.score}%</p>
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
            {/* <li>Data:</li> */}
          </ul>
          <ul className={styles.info_data}>
            <li>{bookRequest.Borrower.course}</li>
            <li>{bookRequest.Borrower.college}</li>
            <li>
              {getAvailability([
                bookRequest.LenderBook.forLoan,
                bookRequest.LenderBook.forTrade,
              ])}
            </li>
            <li>{bookRequest.period} dia(s)</li>
            {/* <li>{bookRequest.start + " - " + bookRequest.end}</li> */}
          </ul>
        </div>
      </div>

      <div className={styles.actions_div}>
        <button
          className={styles.button}
          onClick={(event) => {
            handleReject(bookRequest);
          }}
        >
          <img src="/images/icons/reject.png" alt="" />
        </button>
        <button
          className={styles.button}
          onClick={(event) => {
            // console.log(bookRequest);
            handleAccept(bookRequest);
          }}
        >
          <img src="/images/icons/accept.png" alt="" />
        </button>
      </div>
    </div>
  );
}
