import { Link, useLoaderData } from "react-router-dom";

const DishDetail = () => {
  const { dish, ingredients = [] } = useLoaderData() ?? {};

  if (!dish) {
    return <div>Retten blev ikke fundet.</div>;
  }

  return (
    <article>
      <h1>{dish.title}</h1>
      <img src={dish.image} alt={dish.title} />
      <p>Pris: {dish.price?.normal ?? "-"}</p>
      <p>Kategori: {dish.category?.name || dish.category || "Ukendt"}</p>

      <h3>Ingredienser</h3>
      <ul>
        {(dish.ingredients || ingredients || []).map((ingredient, index) => (
          <li key={`${ingredient?.name || ingredient || index}`}>
            {ingredient?.name || ingredient}
          </li>
        ))}
      </ul>

      <Link to="/">Tilbage</Link>
    </article>
  );
};

export default DishDetail;
