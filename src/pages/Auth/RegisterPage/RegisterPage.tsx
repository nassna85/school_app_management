import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import IUserRegister from "@/interfaces/scope/auth/IUserRegister";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { register, reset } from "@/features/auth/authSlice";

import InputField from "@/components/Global/UI/Forms/InputField/InputField";
import Button from "@/components/Global/UI/Buttons/Button/Button";

type errorObject = {
  [key: string]: string;
};

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading, isError, isSuccess, errors } = useAppSelector(
    (state) => state.auth
  );

  const [registerData, setRegisterData] = useState<IUserRegister>({});
  const [error, setError] = useState<errorObject>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(register(registerData));
  };

  useEffect(() => {
    if (isError) {
      const errorsFormat: errorObject = {};
      errors?.forEach((mess: string) => {
        const key = mess.split('"')[1];
        errorsFormat[key] = mess.replace(/["]/g, "");
      });
      setError(errorsFormat);
      return;
    }
    if (isSuccess) {
      dispatch(reset());
      return navigate("/login");
    }
  }, [isError, isSuccess, errors]);
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="bg-gray-200 h-auto w-11/12 md:w-2/5 lg:w-96 px-4 py-6 rounded"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <InputField
          onChange={handleChange}
          value={registerData.firstName}
          labelText="First Name"
          name="firstName"
          type="text"
          required={true}
          placeholder="First Name"
        />
        {error["firstName"] && <p>{error["firstName"]}</p>}
        <InputField
          onChange={handleChange}
          value={registerData.lastName}
          labelText="Last Name"
          name="lastName"
          type="text"
          required={true}
          placeholder="Last Name"
        />
        <InputField
          onChange={handleChange}
          value={registerData.email}
          labelText="Email"
          name="email"
          type="email"
          required={true}
          placeholder="Email"
        />
        <InputField
          onChange={handleChange}
          value={registerData.companyName}
          labelText="Company Name"
          name="companyName"
          type="text"
          required={true}
          placeholder="Company Name"
        />
        <InputField
          onChange={handleChange}
          value={registerData.password}
          labelText="Password"
          name="password"
          type="password"
          required={true}
          placeholder="Password"
        />
        <Button
          label="Register"
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

export default RegisterPage;
