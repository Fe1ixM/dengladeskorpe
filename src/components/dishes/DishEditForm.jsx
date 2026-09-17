import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCrud } from "../../hooks/useCrud";
import Button from "../../../components/button/Button";
import styles from "./form.module.css";

const DishEditForm = ({ dish, categories, ingredients, onClose }) => {
  const { update } = useCrud();

  const schema = yup.object().shape({
    title: yup.string().required("Titel er påkrævet"),
    priceNormal: yup
      .number()
      .typeError("Pris skal være et tal")
      .required("Pris er påkrævet"),
    priceFamily: yup
      .number()
      .transform((value, original) => (original === "" ? undefined : value))
      .typeError("Pris skal være et tal"),
    category: yup.string().required("Vælg en kategori"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    // defaultValues forudfylder felterne med rettens nuværende data.
    defaultValues: {
      title: dish.title,
      priceNormal: dish.price?.normal,
      priceFamily: dish.price?.family,
      ingredients: dish.ingredients,
      category: dish.category?.name || dish.category,
    },
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("id", dish._id);
    formData.append("title", data.title);
    formData.append(
      "price",
      JSON.stringify({
        normal: Number(data.priceNormal),
        family: data.priceFamily ? Number(data.priceFamily) : 0,
      }),
    );
    formData.append("ingredients", data.ingredients);
    formData.append("category", data.category);
    if (data.image && data.image[0]) {
      formData.append("file", data.image[0]);
    }

    try {
      await update("dish", formData);
      onClose();
    } catch {
      // Fejl vises allerede som toast fra useCrud.
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <label htmlFor="title">Titel:</label>
        <input id="title" type="text" {...register("title")} />
        {errors.title && (
          <span className={styles.error}>{errors.title.message}</span>
        )}
      </div>

      <div>
        <label htmlFor="priceNormal">Pris (normal):</label>
        <input id="priceNormal" type="number" {...register("priceNormal")} />
        {errors.priceNormal && (
          <span className={styles.error}>{errors.priceNormal.message}</span>
        )}
      </div>

      <div>
        <label htmlFor="priceFamily">Pris (familie):</label>
        <input id="priceFamily" type="number" {...register("priceFamily")} />
        {errors.priceFamily && (
          <span className={styles.error}>{errors.priceFamily.message}</span>
        )}
      </div>

      <div>
        <label htmlFor="ingredients">Ingredienser:</label>
        <select id="ingredients" multiple {...register("ingredients")}>
          {ingredients.map((ing) => (
            <option key={ing._id} value={ing.name}>
              {ing.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="category">Kategori:</label>
        <select id="category" {...register("category")}>
          <option value="">Vælg</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
        {errors.category && (
          <span className={styles.error}>{errors.category.message}</span>
        )}
      </div>

      <div>
        <label htmlFor="image">Skift billede (valgfrit):</label>
        <input id="image" type="file" {...register("image")} />
      </div>

      <Button
        type="submit"
        buttonText={isSubmitting ? "Gemmer..." : "Opdater ret"}
      />
    </form>
  );
};

export default DishEditForm;
