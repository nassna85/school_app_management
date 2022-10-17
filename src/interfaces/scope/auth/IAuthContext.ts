import IAuth from "@/interfaces/scope/auth/IAuth";

export default interface IAuthContext {
  auth: IAuth;
  setAuth: (value: IAuth) => void;
}
