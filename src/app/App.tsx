import { Routes, Route } from "react-router-dom";

import LoginPage from "@/pages/Auth/LoginPage/LoginPage";
import RegisterPage from "@/pages/Auth/RegisterPage/RegisterPage";
import DashboardPage from "@/pages/DashboardPage/DashboardPage";
import TeacherPage from "@/pages/Teacher/TeacherPage/TeacherPage";
import AccessDeniedPage from "@/pages/Error/AccessDeniedPage/AccessDeniedPage";
import UnauthorizedPage from "@/pages/Error/UnauthorizedPage/UnauthorizedPage";

import AppLayout from "@/components/Layout/AppLayout/AppLayout";
import ProtectedRoute from "@/components/Layout/ProtectedRoute/ProtectedRoute";
import TeacherProvider from "@/context/teacherContext";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/access-denied" element={<AccessDeniedPage />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        <Route element={<AppLayout />}>
          <Route
            path="/"
            element={
              <ProtectedRoute role="ROLE_MANAGER">
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teachers"
            element={
              <ProtectedRoute role="ROLE_MANAGER">
                <TeacherProvider>
                  <TeacherPage />
                </TeacherProvider>
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
