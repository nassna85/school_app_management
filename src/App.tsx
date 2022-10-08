import { Routes, Route } from "react-router-dom";

import LoginPage from "@/pages/Auth/LoginPage/LoginPage";
import DashboardPage from "@/pages/DashboardPage/DashboardPage";

import AppLayout from "@/components/Layout/AppLayout/AppLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<AppLayout />}>
          <Route path="/" element={<DashboardPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
