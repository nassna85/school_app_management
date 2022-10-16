import { Routes, Route } from "react-router-dom";

import LoginPage from "@/pages/Auth/LoginPage/LoginPage";
import RegisterPage from "@/pages/Auth/RegisterPage/RegisterPage";
import DashboardPage from "@/pages/DashboardPage/DashboardPage";
import TeacherPage from "@/pages/Teacher/TeacherPage/TeacherPage";
import TeacherNewPage from "@/pages/Teacher/TeacherNewPage/TeacherNewPage";
import AccessDeniedPage from "@/pages/Error/AccessDeniedPage/AccessDeniedPage";
import UnauthorizedPage from "@/pages/Error/UnauthorizedPage/UnauthorizedPage";
import NotFound from "@/pages/Error/NotFound/NotFound";

import AppLayout from "@/components/Layout/AppLayout/AppLayout";
import ProtectedRoute from "@/components/Layout/ProtectedRoute/ProtectedRoute";
import TeacherProvider from "@/context/teacherContext";
import Notification from "@/components/Global/UI/Notification/Notification";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/access-denied" element={<AccessDeniedPage />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        <Route path="/not-found" element={<NotFound />} />
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
          <Route
            path="/teachers/new"
            element={
              <ProtectedRoute role="ROLE_MANAGER">
                <TeacherProvider>
                  <TeacherNewPage />
                </TeacherProvider>
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
      <Notification />
    </>
  );
}

export default App;
