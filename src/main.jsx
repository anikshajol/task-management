import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/Router.jsx";
import AuthProviders from "./Providers/AuthProviders.jsx";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProviders>
        <RouterProvider router={routes} />
      </AuthProviders>
      <Toaster />
    </QueryClientProvider>
  </React.StrictMode>
);
