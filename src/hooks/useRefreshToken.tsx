import useAuth from "@/hooks/useAuth";
import AuthService from "@/services/AuthService";
import IAuth from "@/interfaces/scope/auth/IAuth";

const useRefreshToken = () => {
  // @ts-ignore
  const { setAuth } = useAuth();

  return async () => {
    try {
      const res = await AuthService.refreshToken();
      setAuth((prevState: IAuth) => {
        return {
          ...prevState,
          accessToken: res?.accessToken,
          roles: res?.roles,
        };
      });
      return res?.accessToken;
    } catch (e) {
      console.log("useRefreshHooks", e);
    }
  };
};

export default useRefreshToken;
