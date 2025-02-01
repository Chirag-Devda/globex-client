import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import pages
import Register from "./pages/auth/user/Register.jsx";
import Login from "./pages/auth/user/Login.jsx";

function App() {
  const router = createBrowserRouter([
    { path: "user/register", element: <Register /> },
    { path: "user/login", element: <Login /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
