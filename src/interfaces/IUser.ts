export default interface IUser {
  me: {
    _id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string[];
  };
  isError: boolean;
  isLoading: boolean;
  errorMessage: string;
}
