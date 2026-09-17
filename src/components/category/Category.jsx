import styles from "./category.module.css";

export default function Category({ category }) {
  return (
    <figure className={styles.category__component}>
      <img src={category.image} alt={category.name} />
      <figcaption>
        <h3>{category.name}</h3>
      </figcaption>
    </figure>
  );
}
