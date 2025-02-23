import styles from "./logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img src="/racer.png" className={styles.logoImage} />
      <span>
        Schulich
        <br />
        Speedway
      </span>
    </div>
  );
}
