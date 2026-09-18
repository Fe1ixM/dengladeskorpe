import styles from "./category.module.css";

export default function Category({ category }) {
  return (
    <figure className={styles.category__component}>
      <img
        className={styles.category__img}
        src={category.image}
        alt={category.name}
      />
      <figcaption>
        <h3 className={styles.category__text}>{category.name}</h3>
      </figcaption>
    </figure>
  );
}
