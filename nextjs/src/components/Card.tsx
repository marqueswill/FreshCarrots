import {} from "@/pages/_app";
import styles from "@/styles/Card.module.css";
import { User, UserBook } from "@/types/types";
import Link from "next/link";

export default function Card(props: { userBook: UserBook; user: User }) {
  return (
    <div>
      <div>
        <img src={props.userBook.info.thumbnail} className={styles.thumbnail} />
      </div>
      <div className={styles.info}>
        <div>
          <h1 className={styles.title}>{props.userBook.info.title}</h1>
          <h3 className={styles.author}>{props.userBook.info.author}</h3>
        </div>
        <table>
          <tbody>
            <tr>
              <td>
                <b>Disponibilidade:</b>
              </td>
              <td>{props.userBook.avaliability}</td>
            </tr>
            <tr>
              <td>
                <b>Condição</b>
              </td>
              <td>{props.userBook.condition}</td>
            </tr>
            <tr>
              <td>
                <b>Faculdade:</b>
              </td>
              <td>{props.userBook.place}</td>
            </tr>
            <tr>
              <td>
                <b>Solicitações:</b>
              </td>
              <td>{props.userBook.solicitations}</td>
            </tr>
            <tr>
              <td>
                <b>Status:</b>
              </td>
              <td>{props.userBook.status}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <div>
          <img src={props.user.image} alt="" />
          <div>
            <h1>{props.user.name}</h1>
            <h2>{props.user.title}</h2>
          </div>
          <div>
            <img src="images/carrot.png" alt="" />
            <p></p>
          </div>
        </div>
        <div>
          <Link href="">Empréstimo</Link>
          <Link href="">Troca</Link>
        </div>
      </div>
    </div>
  );
}
