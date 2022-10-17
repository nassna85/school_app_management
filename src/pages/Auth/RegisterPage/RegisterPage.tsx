import React, { FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "@/app/hooks";

import InputField from "@/components/Global/UI/Forms/InputField/InputField";
import Button from "@/components/Global/UI/Buttons/Button/Button";
import usePostFetch from "@/hooks/usePostFetch";
import { add } from "@/features/alert/alertSlice";

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { send, errors, isSuccess, data, handleChange, loading } = usePostFetch(
    "/users/register",
    "POST"
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await send(data);
  };

  useEffect(() => {
    if (isSuccess) {
      // TODO Add Notification success
      dispatch(
        add({ type: "success", message: "Account created successfully" })
      );
      navigate("/login");
    }
  }, [isSuccess]);
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="bg-gray-200 h-auto w-11/12 md:w-2/5 lg:w-96 px-4 py-6 rounded"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <InputField
          onChange={handleChange}
          value={data.firstName}
          labelText="First Name"
          name="firstName"
          type="text"
          required={true}
          placeholder="First Name"
          error={errors["firstName"]}
        />
        <InputField
          onChange={handleChange}
          value={data.lastName}
          labelText="Last Name"
          name="lastName"
          type="text"
          required={true}
          placeholder="Last Name"
          error={errors["lastName"]}
        />
        <InputField
          onChange={handleChange}
          value={data.email}
          labelText="Email"
          name="email"
          type="email"
          required={true}
          placeholder="Email"
          error={errors["email"]}
        />
        <InputField
          onChange={handleChange}
          value={data.companyName}
          labelText="Company Name"
          name="companyName"
          type="text"
          required={true}
          placeholder="Company Name"
          error={errors["company"]}
        />
        <InputField
          onChange={handleChange}
          value={data.password}
          labelText="Password"
          name="password"
          type="password"
          required={true}
          placeholder="Password"
          error={errors["password"]}
        />
        <Button
          label="Register"
          isLoading={loading}
          type="submit"
          variant="primary"
          disabled={loading}
          border="rounded"
        />
      </form>
    </div>
  );
};

export default RegisterPage;
