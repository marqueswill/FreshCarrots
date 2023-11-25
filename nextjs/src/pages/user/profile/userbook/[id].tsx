import CardApproval from "@/components/CardApproval";
import styles from "@/styles/UserShelf.module.css";
import ShowUserBook from "@/components/ShowUserBook";

export async function getServerSideProps

export default function Shelf() {
  return (
    <div className={styles.page}>
      <ShowUserBook userBook={userBook} />
      <CardApproval bookRequest={bookRequest} />
    </div>
  );
}
