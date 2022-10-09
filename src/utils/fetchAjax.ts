import axios from "axios";

const BASE_URL = "http://localhost:5001/api/v1";

const persistAuth = localStorage.getItem("persist:auth") || "";
const parsedPersistAuth = JSON.parse(persistAuth);
const token = JSON.parse(parsedPersistAuth?.user)?.token || "";

export const fetchAjax = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer " + token,
  },
});
