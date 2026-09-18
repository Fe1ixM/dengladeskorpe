import { serverPath } from "../settings";

const getData = async (path, errorText = "Fejl ved hentning") => {
  try {
    const res = await fetch(`${serverPath}${path}`);
    if (!res.ok) {
      console.warn(errorText, res.status);
      return [];
    }

    const json = await res.json();
    return json?.data ?? [];
  } catch (error) {
    console.warn(`Fetch failed for ${path}:`, error);
    return [];
  }
};

export const homeLoader = async () => {
  const [dishes, categories] = await Promise.all([
    getData("/dishes"),
    getData("/categories"),
  ]);
  return { dishes, categories };
};

export const employeesLoader = async () => {
  return getData("/employees");
};

export const dishDetailsLoader = async ({ params }) => {
  const [dish, ingredients] = await Promise.all([
    getData(`/dish/${params.dishId}`, "Ret ikke fundet"),
    getData("/ingredients"),
  ]);
  return { dish, ingredients };
};

export const backOfficeLoader = async () => {
  const [dishes, orders, messages, employees, categories, ingredients] =
    await Promise.all([
      getData("/dishes"),
      getData("/orders"),
      getData("/messages"),
      getData("/employees"),
      getData("/categories"),
      getData("/ingredients"),
    ]);
  return { dishes, orders, messages, employees, categories, ingredients };
};
