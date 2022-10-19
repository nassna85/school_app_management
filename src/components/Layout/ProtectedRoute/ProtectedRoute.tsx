import { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";

import IProtectedRoute from "@/interfaces/IProtectedRoute";
import useAuth from "@/hooks/useAuth";

const ProtectedRoute: FC<IProtectedRoute> = ({ children, role }) => {
  // @ts-ignore
  const { auth } = useAuth();
  const location = useLocation();

  return auth?.roles?.includes(role) ? (
    children
  ) : auth?.accessToken ? (
    <Navigate to="access-denied" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
