import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "@/app/store";

import LoginPage from "@/pages/Auth/LoginPage/LoginPage";
import DashboardPage from "@/pages/DashboardPage/DashboardPage";

import AppLayout from "@/components/Layout/AppLayout/AppLayout";
import ProtectedRoute from "@/components/Layout/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<AppLayout />}>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <DashboardPage />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
