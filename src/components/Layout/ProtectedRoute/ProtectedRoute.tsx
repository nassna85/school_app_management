import { Navigate } from "react-router-dom";
import { FC } from "react";

import IProtectedRoute from "@/interfaces/IProtectedRoute";
import { getKeyFromLocalstorage } from "@/utils/token";
import {
  NAME_ROLES_IN_LOCALSTORAGE,
  NAME_TOKEN_IN_LOCALSTORAGE,
} from "@/constants";

const ProtectedRoute: FC<IProtectedRoute> = ({ children, role }) => {
  const token = getKeyFromLocalstorage(NAME_TOKEN_IN_LOCALSTORAGE);
  const roles = getKeyFromLocalstorage(NAME_ROLES_IN_LOCALSTORAGE);

  if (!token) return <Navigate to="/login" replace />;
  if (!roles.includes(role)) return <Navigate to="/access-denied" replace />;
  return children;
};

export default ProtectedRoute;
