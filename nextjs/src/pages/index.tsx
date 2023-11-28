import styles from "@/styles/Home.module.css";
import Carousel from "@/components/Carousel";
import { Book, prisma } from "../../prisma/prisma";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import router, { useRouter } from "next/router";

export const getServerSideProps: GetServerSideProps<{
  categoria: any;
}> = async (context) => {
  const categoria = await prisma.book.findMany({
    where: { category: "Engenharias e Tecnologia" },
  });
  return { props: { categoria } };
};

export default function BookPage({
  categoria,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  // console.log(categoria);
  return (
    <div className={styles.body}>
      <Carousel category={categoria} />
    </div>
  );
}
