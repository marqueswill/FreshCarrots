"use client";
import UserShelf from "@/components/UserShelf";
import styles from "@/styles/UserPage.module.css";
import Link from "next/link";
import Notification from "@/components/Notification";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { prisma } from "../../../../prisma/prisma";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export const getServerSideProps: GetServerSideProps<{
  user: any;
  userBooks: any;
}> = async (context) => {
  const userEmail = String(context.query.email);
  const user = await prisma.user.findUnique({ where: { email: userEmail } });
  const userBooks = await prisma.userBook.findMany({
    where: { cpf: user?.cpf },
    include: { book: true },
  });

  return { props: { user, userBooks } };
};

export default function UserPage({
  user,
  userBooks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const notification = false;
  const { data: session } = useSession();

  console.log(userBooks);

  if (session && session.user) {
    return (
      <div className={styles.page}>
        <div className={styles.user_page}>
          <section className={styles.user_section}>
            <div className={styles.left_user_section}>
              <div className={styles.actions}>
                <Link href="/">
                  <img
                    src="/images/icons/home.png"
                    alt="home"
                    className={styles.icon}
                  />
                </Link>
                <img
                  src="/images/icons/message.png"
                  alt=""
                  className={styles.icon}
                />
                <Notification state={false} />
              </div>
              <div className={styles.user_icon_score}>
                <div>
                  <img
                    src={user.image}
                    alt={user.name}
                    className={styles.user_icon}
                  />
                </div>
              </div>
            </div>
            <div className={styles.right_user_section}>
              <div className={styles.text_info}>
                <h1 className={styles.user_name}>{user.name}</h1>
                <h2 className={styles.user_title}>{user.title}</h2>
                <h3 className={styles.user_info}>
                  <b>Email:</b> {user.email}
                </h3>
                <h3 className={styles.user_info}>
                  <b>Faculdade:</b> {user.college}
                </h3>
                <h3 className={styles.user_info}>
                  <b>Curso:</b> {user.course}
                </h3>
              </div>
            </div>
          </section>
          <div>
            <img src="/images/divisoria.png" className={styles.divisoria} />
          </div>
          <section className={styles.shelf_section}>
            <h1 className={styles.h1}>Estante</h1>
            <UserShelf shelf={userBooks} />
          </section>
        </div>
      </div>
    );
  } else {
    return <h1>Usuário não encontrado</h1>;
  }
}
