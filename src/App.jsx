import "./style/Main.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import NotFound from "./pages/NotFound";

// the router
const Router = createHashRouter([
  { path: "/", element: <Home /> },
  { path: "exercise/:id", element: <ExerciseDetail /> },
  { path: "*", element: <NotFound /> },
]);

function App() {
  return <RouterProvider router={Router} />;
}

export default App;
