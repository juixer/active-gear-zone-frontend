import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.tsx";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.ts";
import { Toaster } from "sonner";
import { PersistGate } from "redux-persist/integration/react";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* REDUX STORE */}
    <Provider store={store}>
      {/* PERSIST */}
      <PersistGate loading={null} persistor={persistor}>
        {/* HELMET */}
        <HelmetProvider>
          {/* REACT ROUTER */}
          <RouterProvider router={router} />
        </HelmetProvider>
      </PersistGate>
      {/* TOASTER */}
      <Toaster position="top-center" expand={true} />
    </Provider>
  </React.StrictMode>
);
