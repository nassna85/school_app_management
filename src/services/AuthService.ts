import { fetchAjaxPrivate } from "@/utils/fetchAjax";
import ILoginCredentials from "@/interfaces/scope/auth/ILoginCredentials";

class AuthService {
  static path = "/users/";

  static async login(credentials: ILoginCredentials) {
    const res = await fetchAjaxPrivate.post(`${this.path}login`, credentials);
    return res?.data;
  }

  static async refreshToken() {
    const res = await fetchAjaxPrivate.get(`${this.path}refresh-token`);
    return res?.data;
  }

  static async logout() {
    const res = await fetchAjaxPrivate.get(`${this.path}logout`);
    return res?.data;
  }
}

export default AuthService;
