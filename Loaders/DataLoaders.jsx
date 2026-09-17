import { serverPath } from "../settings";

const getData = async (path, errorText = "Fejl ved hentning") => {
  const res = await fetch(`${serverPath}${path}`);
  if (!res.ok) throw new Response(errorText, { status: res.status });
  const json = await res.json();
  return json.data;
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
      getData("/ingredient"),
    ]);
  return { dishes, orders, messages, employees, categories, ingredients };
};
