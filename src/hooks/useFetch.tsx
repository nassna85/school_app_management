import axios from "axios";
import { useCallback, useState } from "react";

import { fetchAjax } from "@/utils/fetchAjax";

const useFetch = (url: string) => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetchAjax(url);
      if (res?.data?.status === "success") {
        setItems(res?.data?.data);
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
  };
};

export default useFetch;
