import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import DishEditForm from "../../components/dishes/DishEditForm";
import { useCrud } from "../../hooks/useCrud";
import styles from "./backoffice.module.css";

const Backoffice = () => {
  const {
    dishes = [],
    orders = [],
    messages = [],
    employees = [],
    categories = [],
    ingredients = [],
  } = useLoaderData() ?? {};

  const [view, setView] = useState("dishes");
  const [selectedDish, setSelectedDish] = useState(null);
  const { remove } = useCrud();

  const startNewDish = () => {
    setSelectedDish({
      title: "",
      price: { normal: "", family: "" },
      ingredients: [],
      category: "",
    });
  };

  const handleCloseDishForm = () => {
    setSelectedDish(null);
  };

  return (
    <article className={styles.backoffice}>
      <h1>DASHBOARD</h1>
      <Link to="/">Tilbage til forsiden</Link>

      <nav>
        <button onClick={() => setView("dishes")}>Retter</button>
        <button onClick={() => setView("orders")}>Ordrer</button>
        <button onClick={() => setView("messages")}>Beskeder</button>
        <button onClick={() => setView("employees")}>Personale</button>
      </nav>

      {view === "dishes" && (
        <section>
          <h2>Retter</h2>
          <button type="button" onClick={startNewDish}>
            Tilføj ret
          </button>

          <ul>
            {dishes.map((dish) => (
              <li key={dish._id || dish.id}>
                <strong>{dish.title}</strong>
                <button type="button" onClick={() => setSelectedDish(dish)}>
                  Rediger
                </button>
                <button
                  type="button"
                  onClick={() => remove("dish", dish._id || dish.id)}
                >
                  Slet
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {view === "orders" && (
        <section>
          <h2>Ordrer</h2>
          <ul>
            {orders.map((order) => (
              <li key={order._id || order.id}>{order.status || "Ny ordre"}</li>
            ))}
          </ul>
        </section>
      )}

      {view === "messages" && (
        <section>
          <h2>Beskeder</h2>
          <ul>
            {messages.map((message) => (
              <li key={message._id || message.id}>
                {message.message || message.title || "Ny besked"}
              </li>
            ))}
          </ul>
        </section>
      )}

      {view === "employees" && (
        <section>
          <h2>Personale</h2>
          <ul>
            {employees.map((employee) => (
              <li key={employee._id || employee.id}>
                {employee.name || employee.email || "Medarbejder"}
              </li>
            ))}
          </ul>
        </section>
      )}

      {selectedDish && (
        <div>
          <h3>
            {selectedDish._id ? `Rediger ret: ${selectedDish.title}` : "Ny ret"}
          </h3>
          <DishEditForm
            dish={selectedDish}
            categories={categories}
            ingredients={ingredients}
            onClose={handleCloseDishForm}
          />
        </div>
      )}
    </article>
  );
};

export default Backoffice;
