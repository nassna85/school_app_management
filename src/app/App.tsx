import { Routes, Route } from "react-router-dom";

import LoginPage from "@/pages/Auth/LoginPage/LoginPage";
import RegisterPage from "@/pages/Auth/RegisterPage/RegisterPage";
import DashboardPage from "@/pages/DashboardPage/DashboardPage";

import AppLayout from "@/components/Layout/AppLayout/AppLayout";
import ProtectedRoute from "@/components/Layout/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
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
    </>
  );
}

export default App;
