// 1. React and Hooks
import React, { useEffect } from "react";
import "./App.css";

// 2. Third-party Libraries
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";

// 3. Pages
import Register from "./pages/auth/Register.jsx";
import Login from "./pages/auth/Login.jsx";
import Home from "./pages/home/Home.jsx";

// Api function
import { fetchUser } from "./features/auth/authSlice.js";

// Initialize QueryClient
const queryClient = new QueryClient();

// Define Routes
const router = createBrowserRouter([
  { path: "user/register", element: <Register role={"user"} /> },
  { path: "owner/register", element: <Register role={"owner"} /> },
  { path: "user/login", element: <Login role={"user"} /> },
  { path: "owner/login", element: <Login role={"owner"} /> },
  { path: "/", element: <Home /> },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
