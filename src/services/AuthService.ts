import { fetchAjax } from "@/utils/fetchAjax";
import ILoginCredentials from "@/interfaces/scope/auth/ILoginCredentials";
import IUserRegister from "@/interfaces/scope/auth/IUserRegister";

class AuthService {
  static path = "/users/";

  static async register(userData: IUserRegister) {
    const res = await fetchAjax.post(`${this.path}register`, userData);

    return res?.data;
  }

  static async login(credentials: ILoginCredentials) {
    const res = await fetchAjax.post(`${this.path}login`, credentials);
    return res?.data;
  }

  static async logout() {
    const res = await fetchAjax.get(`${this.path}logout`);
    return res?.data;
  }
}

export default AuthService;
