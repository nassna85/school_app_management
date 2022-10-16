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
          handleChange={handleChange}
          value={data.firstName}
          labelText="First Name"
          labelFor="firstName"
          id="firstName"
          name="firstName"
          type="text"
          isRequired={true}
          placeholder="First Name"
        />
        <InputField
          handleChange={handleChange}
          value={data.lastName}
          labelText="Last Name"
          labelFor="lastName"
          id="lastName"
          name="lastName"
          type="text"
          isRequired={true}
          placeholder="Last Name"
        />
        <InputField
          handleChange={handleChange}
          value={data.email}
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
          value={data.street}
          labelText="Street"
          labelFor="street"
          id="street"
          name="street"
          type="text"
          isRequired={true}
          placeholder="Street"
        />
        <InputField
          handleChange={handleChange}
          value={data.postalCode}
          labelText="Postal Code"
          labelFor="postalCode"
          id="postalCode"
          name="postalCode"
          type="text"
          isRequired={true}
          placeholder="Postal Code"
        />
        <InputField
          handleChange={handleChange}
          value={data.city}
          labelText="City"
          labelFor="city"
          id="city"
          name="city"
          type="text"
          isRequired={true}
          placeholder="City"
        />
        <InputField
          handleChange={handleChange}
          value={data.country}
          labelText="Country"
          labelFor="country"
          id="country"
          name="country"
          type="text"
          isRequired={true}
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
