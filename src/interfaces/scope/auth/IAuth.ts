/*
export default interface IAuth {
  user: {
    token: string;
    role: string[];
  } | null;
  isError?: boolean;
  isSuccess?: boolean;
  isLoading: boolean;
  errors: string[] | null;
  errorMessage?: string;
}
*/
export default interface IAuth {
  accessToken: "";
  roles: string[];
}
