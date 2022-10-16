import { fetchAjax } from "@/utils/fetchAjax";
import IUserRegister from "@/interfaces/scope/auth/IUserRegister";
import ILoginCredentials from "@/interfaces/scope/auth/ILoginCredentials";
import { setAuthorizationAxios } from "@/utils/axios";
import {
  NAME_TOKEN_IN_LOCALSTORAGE,
  NAME_ROLES_IN_LOCALSTORAGE,
} from "@/constants";

class AuthService {
  static path = "/users/";

  static async register(userData: IUserRegister) {
    const res = await fetchAjax.post(`${this.path}register`, userData);

    return res?.data;
  }

  static async login(credentials: ILoginCredentials) {
    const res = await fetchAjax.post(`${this.path}login`, credentials);
    setAuthorizationAxios(res?.data?.token);
    localStorage.setItem(NAME_TOKEN_IN_LOCALSTORAGE, res?.data?.token);
    localStorage.setItem(NAME_ROLES_IN_LOCALSTORAGE, res?.data?.role);
    return res?.data;
  }
}

export default AuthService;
