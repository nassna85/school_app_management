import axios from "axios";
import { useCallback, useState } from "react";

import { fetchAjax } from "@/utils/fetchAjax";

const useFetch = (url: string, isSingleItem = false) => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [item, setItem] = useState<object | any>({});
  const [error, setError] = useState("");

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
        console.log("From useFetch Hooks", e);
        setError(e?.response?.data?.message);
      } else {
        // TODO Notification state global
        setError("Something wrong");
      }
    } finally {
      setLoading(false);
    }
  }, [url]);

  return {
    loading,
    items,
    error,
    load,
    item,
  };
};

export default useFetch;
