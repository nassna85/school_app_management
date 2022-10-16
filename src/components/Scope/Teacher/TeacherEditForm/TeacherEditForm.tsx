import { FC, FormEvent, useEffect } from "react";

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
  const { send, loading, data, handleChange, setData, reset, setOriginalData } =
    usePostFetch(`/teachers/${teacher._id}`, "PUT");
  const { updateTeacher } = useTeacher();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await send(data);
    onCloseDrawer();
    updateTeacher(teacher._id, res);
  };

  useEffect(() => {
    setData(teacher);
    setOriginalData(teacher);
  }, []);

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
        />
        <InputField
          onChange={handleChange}
          value={data.lastName}
          labelText="Last Name"
          name="lastName"
          type="text"
          required={true}
          placeholder="Last Name"
        />
        <InputField
          onChange={handleChange}
          value={data.email}
          labelText="Email"
          name="email"
          type="email"
          required={true}
          placeholder="Email"
        />
        <InputField
          onChange={handleChange}
          value={data.street}
          labelText="Street"
          name="street"
          type="text"
          required={true}
          placeholder="Street"
        />
        <InputField
          onChange={handleChange}
          value={data.postalCode}
          labelText="Postal Code"
          name="postalCode"
          type="text"
          required={true}
          placeholder="Postal Code"
        />
        <InputField
          onChange={handleChange}
          value={data.city}
          labelText="City"
          name="city"
          type="text"
          required={true}
          placeholder="City"
        />
        <InputField
          onChange={handleChange}
          value={data.country}
          labelText="Country"
          name="country"
          type="text"
          required={true}
          placeholder="Country"
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
