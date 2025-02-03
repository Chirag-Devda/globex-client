// 1. React and Hooks
import React from "react";
import "./App.css";

// 2. Third-party Libraries
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";

// 3. Pages
import Register from "./pages/auth/user/Register.jsx";
import Login from "./pages/auth/user/Login.jsx";

// Initialize QueryClient
const queryClient = new QueryClient();

// Define Routes
const router = createBrowserRouter([
  { path: "user/register", element: <Register /> },
  { path: "user/login", element: <Login /> },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
