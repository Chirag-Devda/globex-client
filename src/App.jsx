// 1. React and Hooks
import React, { useEffect } from "react";
import "./App.css";

// 2. Third-party Libraries
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";

// 3. Pages
import Register from "./pages/auth/user/Register.jsx";
import Login from "./pages/auth/user/Login.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./features/auth/authSlice.js";

// Initialize QueryClient
const queryClient = new QueryClient();

// Define Routes
const router = createBrowserRouter([
  { path: "user/register", element: <Register /> },
  { path: "user/login", element: <Login /> },
]);

function App() {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.user);

  // Routes where fetchUser should NOT run
  const authRoutes = ["/user/login", "/user/register"];

  useEffect(() => {
    if (!authRoutes.includes(location.pathname) && !user) {
      dispatch(fetchUser());
    }
  }, [location.pathname, user]);

  if (loading) return <p>Loading.............</p>;
  if (error) return <p>Error Loading User.........</p>;

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
