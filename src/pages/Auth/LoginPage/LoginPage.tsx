import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import InputField from "@/components/Global/UI/Forms/InputField/InputField";
import Button from "@/components/Global/UI/Buttons/Button";
import Alert from "@/components/Global/UI/Alert/Alert";

import { useAppSelector, useAppDispatch } from "@/app/hooks";
import ILoginCredentials from "@/interfaces/ILoginCredentials";
import { login, reset } from "@/features/auth/authSlice";
import { add } from "@/features/alert/alertSlice";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isSuccess, isLoading, isError, user, errorMessage } = useAppSelector(
    (state) => state.auth
  );

  const [credentials, setCredentials] = useState<ILoginCredentials>({});
  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setError("");
    e.preventDefault();
    dispatch(login(credentials));
  };

  useEffect(() => {
    if (isError && errorMessage) {
      setError(errorMessage);
      return;
    }
    if (isSuccess) {
      dispatch(reset());
      dispatch(
        add({ type: "success", message: "Vous êtes désormais connecté(e)" })
      );
      //return navigate("/");
      window.location.href = "/";
    }
  }, [isSuccess, isError, user, errorMessage]);
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="bg-gray-200 h-auto w-11/12 md:w-2/5 lg:w-96 px-4 py-6 rounded"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-center">Login</h1>
        {error && <Alert type="bg-red-500">{error}</Alert>}
        <InputField
          handleChange={handleChange}
          value={credentials.email}
          labelText="Email"
          labelFor="email"
          id="email"
          name="email"
          type="email"
          isRequired={true}
          placeholder="Email"
        />
        <InputField
          handleChange={handleChange}
          value={credentials.password}
          labelText="Password"
          labelFor="password"
          id="password"
          name="password"
          type="password"
          isRequired={true}
          placeholder="Password"
        />
        <Button
          label="Login"
          isLoading={isLoading}
          type="submit"
          variant="bg-pink-700"
          disabled={isLoading}
        />
      </form>
    </div>
  );
};

export default LoginPage;
