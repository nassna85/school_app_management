export default interface IAuth {
  user: {
    id: number | null;
    email: string | null;
    roles?: [];
  } | null;
  isError?: boolean;
  isSuccess?: boolean;
  isLoading: boolean;
  errors: string[] | null;
}
