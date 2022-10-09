import React, { ChangeEvent, useState } from "react";
import InputField from "@/components/Global/UI/Forms/InputField/InputField";

interface credentialsState {
  email?: string;
  password?: string;
}

const LoginPage = () => {
  const [credentials, setCredentials] = useState<credentialsState>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="bg-gray-200 h-auto w-11/12 md:w-2/5 lg:w-80 p-4 rounded">
        <h1 className="text-2xl font-bold text-center">Login</h1>
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
      </form>
    </div>
  );
};

export default LoginPage;
