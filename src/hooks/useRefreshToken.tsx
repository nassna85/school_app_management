import { fetchAjax } from "@/utils/fetchAjax";
import useAuth from "@/hooks/useAuth";

const useRefreshToken = () => {
  // @ts-ignore
  const { setAuth } = useAuth();

  const refresh = async () => {
    try {
      const res = await fetchAjax.get("/users/refresh", {
        withCredentials: true,
      });
      // https://www.youtube.com/watch?v=nI8PYZNFtac&list=PL0Zuz27SZ-6PRCpm9clX0WiBEMB70FWwd&index=4
      // 16min18
      // TODO Create refresh route in server side
    } catch (e) {
      console.log("useRefreshHooks", e);
    }
  };

  return <div></div>;
};

export default useRefreshToken;
