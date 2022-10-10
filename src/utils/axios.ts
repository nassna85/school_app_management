import axios from "axios";

export const setAuthorizationAxios = (token: string) => {
  return (axios.defaults.headers.common["Authorization"] = `Bearer ${token}`);
};

export const resetAuthorizationAxios = () => {
  return delete axios.defaults.headers.common["Authorization"];
};
