import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import pages
import Register from "./pages/auth/user/Register.jsx";

function App() {
  const router = createBrowserRouter([
    { path: "user/register", element: <Register /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
