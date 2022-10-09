import { Navigate } from "react-router-dom";
import { FC } from "react";

import IProtectedRoute from "@/interfaces/IProtectedRoute";
import { useAppSelector } from "@/app/hooks";

const ProtectedRoute: FC<IProtectedRoute> = ({ children, role }) => {
  const auth = useAppSelector((state) => state.auth);

  if (!auth?.user?.token) return <Navigate to="/login" replace />;
  if (!auth?.user?.role.includes(role))
    return <Navigate to="/access-denied" replace />;
  return children;
};

export default ProtectedRoute;
