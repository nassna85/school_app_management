import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { fetchAjax } from "@/utils/fetchAjax";
import { useAppDispatch } from "@/app/hooks";
import { add } from "@/features/alert/alertSlice";

const useFetch = (url: string, isSingleItem = false) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [item, setItem] = useState<object | any>({});
  // const [error, setError] = useState("");

  const load = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetchAjax(url);
      if (res?.data?.status === "success") {
        if (isSingleItem) {
          setItem(res?.data?.data);
        } else {
          setItems(res?.data?.data);
        }
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
  }, [url]);

  return {
    loading,
    items,
    load,
    item,
  };
};

export default useFetch;
