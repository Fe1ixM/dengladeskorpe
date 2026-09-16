import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";

import Home from "./pages/home/Home";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
    </Route>,
  ),
);

export default routes;
