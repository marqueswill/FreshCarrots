import styles from "@/styles/UserBookPage.module.css";
import CardApproval from "@/components/CardApproval";
import ShowUserBook from "@/components/ShowUserBook";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { prisma } from "../../../../../../prisma/prisma";

export const getServerSideProps: GetServerSideProps<{
  userBook: any;
  loanRequests: any;
}> = async (context) => {
  const userBookId = Number(context.query.id);

  const userBook = await prisma.userBook.findUnique({
    where: { id: userBookId },
    include: { book: true, user: true },
  });

  const loanRequests = await prisma.loan.findMany({
    where: { lenderBookId: userBookId },
    include: {
      LenderBook: { include: { book: true, user: true } }, //lender (user)
      Borrower: true, // borrower
    },
  });

  return { props: { userBook, loanRequests } };
};

export default function UserBookPage({
  userBook,
  loanRequests,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={styles.page}>
      <ShowUserBook userBook={userBook} />
      {loanRequests.map((bookRequest: any) => {
        <CardApproval bookRequest={bookRequest} />;
      })}
    </div>
  );
}
