import {} from "@/pages/_app";
import styles from "@/styles/CardRequest.module.css";
import { User, UserBook } from "@/types/types";
import Link from "next/link";

function Button({
  children,

  enable = false,
  isbn,
}: {
  children: React.ReactNode;
  enable?: boolean;
  isbn?: number;
}) {
  if (enable != undefined) {
    if (enable) {
      return (
        // <Link href={`/request/${isbn}`}>
        <button
          className={styles.button_true}
          onClick={() => {
            window.location.href = `/request/${isbn}`;
          }}
        >
          {children}
        </button>
      );
    } else {
      return <button className={styles.button_false}>{children}</button>;
    }
  }
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
            src={props.userBook.book.thumbnail}
            className={styles.thumbnail}
          />
        </div>
        <div className={styles.book_info}>
          <div>
            <h1 className={styles.book_title}>{props.userBook.book.title}</h1>
            <h2 className={styles.book_author}>{props.userBook.book.author}</h2>
          </div>
          <div className={styles.listas}>
            <ul className={styles.info_label}>
              <li>Disponibilidade:</li>
              <li>Condição</li>
              <li>Faculdade:</li>
              <li>Solicitações:</li>
              <li>Status:</li>
            </ul>
            <ul className={styles.info_data}>
              <li>{getAvailability(props.userBook.avaliability)}</li>
              <li>{props.userBook.condition}</li>
              <li>{props.userBook.place}</li>
              <li>{props.userBook.solicitations} solicitações</li>
              <li>{props.userBook.status}</li>
            </ul>
          </div>
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
            <img
              src="/images/carrot.png"
              alt=""
              className={styles.score_icon}
            />
            <p className={styles.score_value}>{props.user.score}%</p>
          </div>
        </div>
        <div className={styles.actions}>
          <Button
            enable={props.userBook.avaliability.get("borrow")}
            isbn={props.userBook.id}
          >
            Empréstimo
          </Button>
          <Button
            enable={props.userBook.avaliability.get("trade")}
            isbn={props.userBook.id}
          >
            Troca
          </Button>
        </div>
      </div>
    </div>
  );
}
