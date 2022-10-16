import { FC, FormEvent, useEffect, useState } from "react";

import ITeacher from "@/interfaces/scope/teacher/ITeacher";
import usePostFetch from "@/hooks/usePostFetch";
import useTeacher from "@/hooks/useTeacher";

import InputField from "@/components/Global/UI/Forms/InputField/InputField";
import Button from "@/components/Global/UI/Buttons/Button/Button";

type TeacherEditFormProps = {
  teacher: ITeacher;
  onCloseDrawer: () => void;
};

const TeacherEditForm: FC<TeacherEditFormProps> = ({
  teacher,
  onCloseDrawer,
}) => {
  const {
    send,
    loading,
    data,
    handleChange,
    setData,
    reset,
    setOriginalData,
    errors,
    isSuccess,
  } = usePostFetch(`/teachers/${teacher._id}`, "PUT");
  const { updateTeacher } = useTeacher();

  const [response, setResponse] = useState(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await send(data);
    setResponse(res);
  };

  useEffect(() => {
    setData(teacher);
    setOriginalData(teacher);
  }, []);

  useEffect(() => {
    if (isSuccess) {
      onCloseDrawer();
      updateTeacher(teacher._id, response);
    }
  }, [isSuccess]);

  return (
    <>
      <div className="flex justify-end">
        <Button
          label="Reset"
          isLoading={false}
          type="button"
          variant="default"
          disabled={false}
          onClick={reset}
        />
      </div>
      <form onSubmit={handleSubmit}>
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
          value={data.street}
          labelText="Street"
          name="street"
          type="text"
          required={true}
          placeholder="Street"
          error={errors["street"]}
        />
        <InputField
          onChange={handleChange}
          value={data.postalCode}
          labelText="Postal Code"
          name="postalCode"
          type="text"
          required={true}
          placeholder="Postal Code"
          error={errors["postalCode"]}
        />
        <InputField
          onChange={handleChange}
          value={data.city}
          labelText="City"
          name="city"
          type="text"
          required={true}
          placeholder="City"
          error={errors["city"]}
        />
        <InputField
          onChange={handleChange}
          value={data.country}
          labelText="Country"
          name="country"
          type="text"
          required={true}
          placeholder="Country"
          error={errors["country"]}
        />
        <Button
          label="Save"
          isLoading={loading}
          type="submit"
          variant="primary"
          disabled={loading}
        />
      </form>
    </>
  );
};

export default TeacherEditForm;
