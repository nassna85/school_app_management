import { useEffect } from "react";

import useRefreshToken from "@/hooks/useRefreshToken";
import { fetchAjaxPrivate } from "@/utils/fetchAjax";
import useAuth from "@/hooks/useAuth";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  // @ts-ignore
  const { auth } = useAuth();

  useEffect(() => {
    const requestIntercept = fetchAjaxPrivate.interceptors.request.use(
      // @ts-ignore
      (config) => {
        if (!config?.headers?.["authorization"]) {
          // @ts-ignore
          config.headers["authorization"] = `Bearer ${auth?.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = fetchAjaxPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers["authorization"] = `Bearer ${newAccessToken}`;
          return fetchAjaxPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    // Cleanup
    return () => {
      fetchAjaxPrivate.interceptors.response.eject(responseIntercept);
      fetchAjaxPrivate.interceptors.request.eject(requestIntercept);
    };
  }, [auth, refresh]);

  return fetchAjaxPrivate;
};

export default useAxiosPrivate;
