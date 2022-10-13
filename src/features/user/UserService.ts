import { fetchAjax } from "@/utils/fetchAjax";

class UserService {
  static path = "/users/";

  static async me() {
    const res = await fetchAjax.get(`${this.path}me`);
    return res?.data?.user;
  }
}

export default UserService;
