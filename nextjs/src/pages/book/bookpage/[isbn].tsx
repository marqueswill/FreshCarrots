import Link from "next/link";
import styles from "@/styles/BookPage.module.css";
import CardRequest from "@/components/CardRequest";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { prisma } from "../../../../prisma/prisma";
import { useSession } from "next-auth/react";

export const getServerSideProps: GetServerSideProps<{
  book: any;
  userBooks: any;
}> = async (context) => {
  const isbn = String(context.query.isbn);

  const book = await prisma.book.findUnique({ where: { isbn: isbn } });
  const userBooks = await prisma.userBook.findMany({
    where: { isbn: isbn, avaliable: true },
    include: { book: true, user: true },
  });

  return { props: { book, userBooks } };
};

export default function BookPage({
  book,
  userBooks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const { data: session } = useSession();
  console.log(userBooks);
  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.bookpage}>
      <section className={styles.book_section}>
        <div className={styles.total_div}>
          <div className={styles.top_div}>
            <div className={styles.images}>
              <img
                src={`/images/thumbnails/${book.isbn}.png`}
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
              <br />
              <table>
                <tbody>
                  <tr>
                    <td>
                      <b>Ano:</b>
                    </td>
                    <td>{book.year}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Edição:</b>
                    </td>
                    <td>{book.edition}ª edição</td>
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
                    <td>{book.isbn}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Categoria:</b>
                    </td>
                    <td>{book.category}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={styles.bottom_div}>
            <p className={styles.sinopse}>
              <b>Sinopse:</b> {book.sinopse}
            </p>
            <div className={styles.actions}>
              <Link href="#" className={styles.button}>
                <img src="/images/icons/avaliation.png" />
                Avaliações
              </Link>
              <Link href="#" className={styles.button}>
                <img src="/images/icons/avaliable.png" />
                Disponíveis
              </Link>
              <Link href="/book/register" className={styles.button}>
                <img src="/images/icons/register.png" />
                Registrar exemplar
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.avaliable_section}>
        <h1 className={styles.title}>
          Livros disponíveis para empréstimo e troca:
        </h1>
        {userBooks &&
          userBooks.map((userBook: any) => {
            return (
              userBook.user.email != String(session?.user?.email) && (
                <CardRequest userBook={userBook} />
              )
            );
          })}
      </section>
    </div>
  );
}
