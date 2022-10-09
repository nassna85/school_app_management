import { fetchAjax } from "@/utils/fetchAjax";
import IUserRegister from "@/interfaces/IUserRegister";

class AuthService {
  static async register(userData: IUserRegister) {
    const res = await fetchAjax.post("/users/register", userData);

    return res?.data;
  }
}

export default AuthService;
