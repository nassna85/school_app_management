import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import "./index.css";
import theme from "@/theme";

import { AuthContextProvider } from "@/context/authContext";
import { store } from "@/app/store";

import App from "@/app/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AuthContextProvider>
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
          </AuthContextProvider>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
