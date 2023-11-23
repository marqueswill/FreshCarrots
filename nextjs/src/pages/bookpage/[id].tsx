import Link from "next/link";
import styles from "@/styles/BookPage.module.css";
import CardRequest from "@/components/CardRequest";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { Book } from "@prisma/client";
import { getBookRequests } from "@/lib/requests";

export const getServerSideProps: GetServerSideProps<{
  book: any;
}> = async (context) => {
  const isbn = context.query.id;
  const res = await fetch(`http://localhost:3000/api/bookpage/${isbn}`, {
    method: "GET",
  });
  const book = await res.json();
  return { props: { book } };
};

export default function MenuPage({
  book,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  if (!book) {
    return <div>Loading...</div>;
  }

  const requests = getBookRequests(book.isbn);

  return (
    <div className={styles.bookpage}>
      <section className={styles.book_section}>
        <div className={styles.total_div}>
          <div className={styles.top_div}>
            <div className={styles.images}>
              <img
                src={book.thumbnail}
                alt={book.title}
                className={styles.thumbnail}
              />
              <img src="/images/star_example.png" className={styles.stars} />
            </div>
            <div className={styles.info}>
              <div>
                <h1 className={styles.title}>{book.title}</h1>
                <h3 className={styles.author}>{book.author}</h3>
              </div>
              <table>
                <tbody>
                  {" "}
                  <tr>
                    <td>
                      <b>Edição:</b>
                    </td>
                    <td>{book.edition}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Páginas:</b>
                    </td>
                    <td>{book.pages}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Idioma:</b>
                    </td>
                    <td>{book.language}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>ISBN:</b>
                    </td>
                    <td>{book.isnb}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Categoria:</b>
                    </td>
                    <td>{book.category}</td>
                  </tr>
                </tbody>
              </table>
              <p className={styles.sinopse}>
                <b>Sinopse:</b> {book.sinopse}
              </p>
            </div>
          </div>
          <div className={styles.bottom_div}>
            <Link href="" className={styles.button}>
              <img src="/images/icons/avaliation.png" />
              Avaliações
            </Link>
            <Link href="" className={styles.button}>
              <img src="/images/icons/avaliable.png" />
              Disponíveis
            </Link>
            <Link href="" className={styles.button}>
              <img src="/images/icons/register.png" />
              Registrar exemplar
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.avaliable_section}>
        {/* <CardRequest user={} userBook={} /> */}
        {/* {if (requests) {
          requests.map((request) => {
          <CardRequest user={request.user} userBook={request.userBook} />;
        })}} */}
      </section>
    </div>
  );
}
