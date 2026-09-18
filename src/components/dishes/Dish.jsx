import styles from "./dishes.module.css";

const Dish = ({ dish }) => {
  return (
    <figure className={styles.dish}>
      <img className={styles.dishImage} src={dish.image} alt={dish.title} />
      {dish && <h3 className={styles.dishTitle}>{dish.title}</h3>}
    </figure>
  );
};

export default Dish;
