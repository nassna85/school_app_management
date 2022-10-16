import axios from "axios";

import { getKeyFromLocalstorage } from "@/utils/token";
import { NAME_TOKEN_IN_LOCALSTORAGE } from "@/constants";

const BASE_URL = "http://localhost:5001/api/v1";

export const fetchAjax = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${getKeyFromLocalstorage(
      NAME_TOKEN_IN_LOCALSTORAGE
    )}`,
  },
});
