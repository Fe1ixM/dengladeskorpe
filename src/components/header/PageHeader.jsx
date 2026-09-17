import styles from "../header/pageheader.module.css";
import headerImg from "../../assets/headerImg.png";

export default function PageHeader({ title, subTitle }) {
  return (
    <header
      className={styles.pageHeader}
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      <div className={styles.pageheader__header}>
        <h1 className={styles.pageheader__title}>
          {title}
          {subTitle && (
            <span className={styles.pageheader__subtitle}> {subTitle} </span>
          )}
        </h1>
      </div>
    </header>
  );
}
