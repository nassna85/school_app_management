import { Navigate } from "react-router-dom";
import { FC } from "react";

import IProtectedRoute from "@/interfaces/IProtectedRoute";
import { useAppSelector } from "@/app/hooks";

const ProtectedRoute: FC<IProtectedRoute> = ({ children }) => {
  const user = useAppSelector((state) => state.auth);

  if (!user?.id) return <Navigate to="/login" replace />;
  return children;
};

export default ProtectedRoute;
