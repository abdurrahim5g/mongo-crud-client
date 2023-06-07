import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch(`http://localhost:5000/users/`),
      },
      { path: "/users/add", element: <AddUser /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
