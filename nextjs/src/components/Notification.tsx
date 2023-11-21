import styles from "@/styles/Navbar.module.css";

export default function Notification({state}: { state: Boolean }) {
  return (
    <>
      {!state && (
        <span>
          {/* <Link href="" className={styles.link}> */}
          <img
            src="/images/icons/notification_false.png"
            alt=""
            className={styles.notification_icon}
          />{" "}
          {/* </Link> */}
        </span>
      )}
      {state && (
        <span>
          {/* <Link href="" className={styles.link}> */}
          <img
            src="/images/icons/notification_true.png"
            alt=""
            className={styles.notification_icon}
          />{" "}
          {/* </Link> */}
        </span>
      )}{" "}
    </>
  );
}
