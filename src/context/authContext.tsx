import { createContext, FC, ReactNode, useState } from "react";

import IAuthContext from "@/interfaces/scope/auth/IAuthContext";
import IAuth from "@/interfaces/scope/auth/IAuth";

const AuthContext = createContext<IAuthContext | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContextProvider: FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<IAuth>({
    accessToken: "",
    roles: [],
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
