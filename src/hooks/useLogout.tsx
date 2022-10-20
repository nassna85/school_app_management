import { useState } from "react";
import AuthService from "@/services/AuthService";
import useAuth from "@/hooks/useAuth";

const useLogout = () => {
  // @ts-ignore
  const { setAuth } = useAuth();

  const [isLoading, setIsLoading] = useState(false);

  const logout = async () => {
    setIsLoading(true);
    setAuth({});
    try {
      await AuthService.logout();
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return { logout, isLoading };
};

export default useLogout;
