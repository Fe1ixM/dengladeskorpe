import { useState } from "react";
import Dish from "./Dish";
import styles from "./dishes.module.css";
import { Link } from "react-router-dom";
import Category from "./../category/Category";

export default function Dishes({ dishes, categories }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredDishes = selectedCategory
    ? dishes.filter((dish) => dish.category === selectedCategory)
    : dishes;

  const handleCategoryClick = (categoryName) => {
    if (selectedCategory === categoryName) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(categoryName);
    }
  };

  return (
    <>
      <div className={styles.category}>
        <h3 className={styles.category__heading}>Vælg kategori</h3>
      </div>

      <nav className={styles.category__navigation}>
        {categories?.map((category) => (
          <div
            key={category._id}
            onClick={() => handleCategoryClick(category.name)}
            className={`${styles.category__section} ${
              selectedCategory === category.name ? styles.active : ""
            }`}
          >
            <Category category={category} />
          </div>
        ))}
      </nav>

      <header className={styles.category__section__header}>
        {selectedCategory && <h3>Alle vores {selectedCategory}</h3>}
      </header>

      <section className={styles.category__container}>
        {filteredDishes.length > 0 ? (
          filteredDishes.map((dish) => (
            <Link
              to={`/dish/${dish._id}`}
              key={dish._id}
              className={styles.dishLink}
            >
              <Dish dish={dish} />
            </Link>
          ))
        ) : (
          <p>Ingen retter fundet.</p>
        )}
      </section>
    </>
  );
}
