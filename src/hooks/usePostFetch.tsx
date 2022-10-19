import axios from "axios";
import { ChangeEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { add } from "@/features/alert/alertSlice";
import { useAppDispatch } from "@/app/hooks";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";

import IErrorsFormatToObject from "@/interfaces/IErrorsFormatToObject";
import { fetchAjax } from "@/utils/fetchAjax";

type dataType = Record<string, any>;

const usePostFetch = (
  url: string,
  method: "POST" | "PUT",
  status: "private" | "public" = "private"
) => {
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<dataType>({});
  const [originalData, setOriginalData] = useState<dataType>({});
  const [errors, setErrors] = useState<IErrorsFormatToObject>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }, []);

  const reset = () => {
    setData(originalData);
  };

  const send = useCallback(
    async (data: object) => {
      setLoading(true);
      setErrors({});
      setIsSuccess(false);
      const instanceAxios = status === "private" ? axiosPrivate : fetchAjax;
      try {
        if (method === "POST") {
          const res = await instanceAxios.post(url, data);
          dispatch(
            add({ type: "success", message: "Item added successfully" })
          );
          setIsSuccess((prevState) => !prevState);
          return res?.data?.data;
        }
        if (method === "PUT") {
          const res = await instanceAxios.put(url, data);
          dispatch(
            add({ type: "success", message: "Item edited successfully" })
          );
          setIsSuccess((prevState) => !prevState);
          return res?.data?.data;
        }
      } catch (e) {
        if (axios.isAxiosError(e)) {
          if (e?.response?.data?.errors) {
            const errorsValidation = e.response.data.errors;
            const errorsFormat: IErrorsFormatToObject = {};
            errorsValidation?.forEach((message: string) => {
              const key = message.split('"')[1];
              errorsFormat[key] = message.replace(/["]/g, "");
            });
            setErrors(errorsFormat);
            return;
          }
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
          dispatch(
            add({
              type: "error",
              message:
                e?.response?.data?.message ||
                e?.response?.statusText ||
                "Something wrong",
            })
          );
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
    data,
    setData,
    reset,
    setOriginalData,
    handleChange,
    errors,
    isSuccess,
  };
};

export default usePostFetch;
