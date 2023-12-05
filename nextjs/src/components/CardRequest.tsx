import { getAvailability } from "@/lib/userBook";
import {} from "@/pages/_app";
import styles from "@/styles/CardRequest.module.css";
import { useSession } from "next-auth/react";

function Button({
  children,

  enable = false,
  href,
}: {
  children: React.ReactNode;
  enable?: boolean;
  href: string;
}) {
  const { data: session } = useSession();

  if (enable != undefined) {
    if (enable) {
      return (
        <button
          className={styles.button_true}
          onClick={(event) => {
            if (session && session.user) window.location.href = href;
            else alert("Faça login para realizar empréstimo/troca");
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

export default function Card({ userBook }: { userBook: any }) {
  return (
    <div className={styles.card}>
      <div className={styles.book_div}>
        <div className={styles.cover_div}>
          <img src={userBook.book.thumbnail} className={styles.thumbnail} />
        </div>
        <div className={styles.book_info}>
          <div>
            <h1 className={styles.book_title}>{userBook.book.title}</h1>
            <h2 className={styles.book_author}>{userBook.book.author}</h2>
          </div>
          <div className={styles.listas}>
            <ul className={styles.info_label}>
              <li>Disponibilidade:</li>
              <li>Condição</li>
              <li>Faculdade:</li>
              <li>Solicitações:</li>
            </ul>
            <ul className={styles.info_data}>
              <li>{getAvailability([userBook.forLoan, userBook.forTrade])}</li>
              <li>{userBook.condition}</li>
              <li>{userBook.place}</li>
              <li>{userBook.user.college}</li>
              <li>{userBook.solicitations} pedido(s)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.user_div}>
        <div className={styles.user_info}>
          <img src={userBook.user.image} alt="" className={styles.user_icon} />
          <div>
            <h1 className={styles.user_name}>{userBook.user.name}</h1>
            <h2 className={styles.user_title}>{userBook.user.title}</h2>
          </div>
          <div className={styles.score}>
            <img
              src="/images/carrot.png"
              alt=""
              className={styles.score_icon}
            />
            <p className={styles.score_value}>{userBook.user.score}%</p>
          </div>
        </div>
        <div className={styles.actions}>
          <Button
            enable={userBook.forLoan}
            href={`/request/loan/${userBook.id}`}
          >
            Empréstimo
          </Button>
          <Button enable={userBook.forTrade} href={"#"}>
            Troca
          </Button>
        </div>
      </div>
    </div>
  );
}
