import { fetchAjax } from "@/utils/fetchAjax";
import IUserRegister from "@/interfaces/IUserRegister";
import ILoginCredentials from "@/interfaces/ILoginCredentials";
import { setAuthorizationAxios } from "@/utils/axios";

class AuthService {
  static path = "/users/";

  static async register(userData: IUserRegister) {
    const res = await fetchAjax.post(`${this.path}register`, userData);

    return res?.data;
  }

  static async login(credentials: ILoginCredentials) {
    const res = await fetchAjax.post(`${this.path}login`, credentials);
    setAuthorizationAxios(res?.data?.token);
    return res?.data;
  }
}

export default AuthService;
