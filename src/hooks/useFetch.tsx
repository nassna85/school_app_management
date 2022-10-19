import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "@/app/hooks";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import { add } from "@/features/alert/alertSlice";

const useFetch = (url: string, isSingleItem = false) => {
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [item, setItem] = useState<object | any>({});

  const load = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axiosPrivate(url);
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
