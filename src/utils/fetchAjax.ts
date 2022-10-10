import axios from "axios";

import { getTokenFromLocalstorage } from "@/utils/token";

const BASE_URL = "http://localhost:5001/api/v1";

const token = getTokenFromLocalstorage("persist:auth");

export const fetchAjax = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
});
