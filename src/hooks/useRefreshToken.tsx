import useAuth from "@/hooks/useAuth";
import AuthService from "@/services/AuthService";
import IAuth from "@/interfaces/scope/auth/IAuth";

const useRefreshToken = () => {
  // @ts-ignore
  const { setAuth } = useAuth();

  const refresh = async () => {
    try {
      const res = await AuthService.refreshToken();
      setAuth((prevState: IAuth) => {
        console.log(prevState);
        console.log(res);
        return {
          ...prevState,
          accessToken: res?.accessToken,
          roles: res?.roles,
        };
      });
      return res;
    } catch (e) {
      console.log("useRefreshHooks", e);
    }
  };

  return refresh;
};

export default useRefreshToken;
