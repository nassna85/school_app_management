import axios from "axios";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import InputField from "@/components/Global/UI/Forms/InputField/InputField";
import Button from "@/components/Global/UI/Buttons/Button/Button";
import Alert from "@/components/Global/UI/Alert/Alert";

import { useAppDispatch } from "@/app/hooks";
import useAuth from "@/hooks/useAuth";
import ILoginCredentials from "@/interfaces/scope/auth/ILoginCredentials";
import { add } from "@/features/alert/alertSlice";
import AuthService from "@/services/AuthService";

const LoginPage = () => {
  // @ts-ignore
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const dispatch = useAppDispatch();

  const [credentials, setCredentials] = useState<ILoginCredentials>({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      const res = await AuthService.login(credentials);
      setAuth({ accessToken: res?.accessToken, roles: res?.roles });
      dispatch(
        add({ type: "success", message: "Vous êtes désormais connecté(e)" })
      );
      setCredentials({ email: "", password: "" });
      navigate(from, { replace: true });
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.log(e);
        setError(e?.response?.data?.message || "Error Occured");
      } else {
        setError("Something wrong");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="bg-gray-200 h-auto w-11/12 md:w-2/5 lg:w-96 px-4 py-6 rounded"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-center">Login</h1>
        {error && <Alert type="bg-red-500">{error}</Alert>}
        <InputField
          onChange={handleChange}
          value={credentials.email}
          labelText="Email"
          name="email"
          type="email"
          required={true}
          placeholder="Email"
        />
        <InputField
          onChange={handleChange}
          value={credentials.password}
          labelText="Password"
          name="password"
          type="password"
          required={true}
          placeholder="Password"
        />
        <Button
          label="Login"
          isLoading={isLoading}
          type="submit"
          variant="primary"
          disabled={isLoading}
          border="rounded"
        />
      </form>
    </div>
  );
};

export default LoginPage;
