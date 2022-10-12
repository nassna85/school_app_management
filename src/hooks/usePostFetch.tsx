import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { fetchAjax } from "@/utils/fetchAjax";
import { add } from "@/features/alert/alertSlice";
import { useAppDispatch } from "@/app/hooks";

const usePostFetch = (url: string, method: "POST" | "PUT") => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const send = useCallback(
    async (data: object) => {
      setLoading(true);
      try {
        if (method === "POST") {
          const res = await fetchAjax.post(url, data);
          dispatch(
            add({ type: "success", message: "Item added successfully" })
          );
          return res?.data?.data;
        }
        if (method === "PUT") {
          const res = await fetchAjax.put(url, data);
          dispatch(
            add({ type: "success", message: "Item edited successfully" })
          );
          return res?.data?.data;
        }
      } catch (e) {
        if (axios.isAxiosError(e)) {
          dispatch(
            add({
              type: "error",
              message:
                e?.response?.data?.message ||
                e?.response?.statusText ||
                "Something wrong",
            })
          );
          if (e?.response?.status === 401) {
            navigate("/unauthorized");
            return;
          }
          if (e?.response?.status === 403) {
            navigate("/access-denied");
            return;
          }
          if (e?.response?.status === 404) {
            navigate("/not-found");
            return;
          }
        } else {
          dispatch(add({ type: "error", message: "Something wrong" }));
        }
      } finally {
        setLoading(false);
      }
    },
    [url]
  );

  return {
    loading,
    send,
  };
};

export default usePostFetch;
