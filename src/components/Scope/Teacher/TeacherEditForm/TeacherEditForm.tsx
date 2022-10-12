import { FC, FormEvent, useEffect, useState } from "react";

import { ITeacher } from "@/interfaces/ITeacher";
import usePostFetch from "@/hooks/usePostFetch";
import useTeacher from "@/hooks/useTeacher";

import InputField from "@/components/Global/UI/Forms/InputField/InputField";
import Button from "@/components/Global/UI/Buttons/Button";

type TeacherEditFormProps = {
  teacher: ITeacher;
  onCloseDrawer: () => void;
};

const TeacherEditForm: FC<TeacherEditFormProps> = ({
  teacher,
  onCloseDrawer,
}) => {
  const { send, loading } = usePostFetch(`/teachers/${teacher._id}`, "PUT");
  const { updateTeacher } = useTeacher();

  const [originalTeacher, setOriginalTeacher] = useState(teacher);
  const [editedTeacher, setEditedTeacher] = useState(teacher);

  const handleChange = (changes: object) => {
    setEditedTeacher({ ...editedTeacher, ...changes });
  };

  const reset = () => {
    setEditedTeacher(originalTeacher);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await send(editedTeacher);
    onCloseDrawer();
    updateTeacher(teacher._id, res);
  };

  return (
    <>
      <div className="flex justify-end">
        <Button
          label="Reset"
          isLoading={false}
          type="button"
          variant="bg-blue-700"
          disabled={false}
          onClick={reset}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <InputField
          handleChange={(e) => handleChange({ firstName: e.target.value })}
          value={editedTeacher?.firstName}
          labelText="First Name"
          labelFor="firstName"
          id="firstName"
          name="firstName"
          type="text"
          isRequired={true}
          placeholder="First Name"
        />
        <InputField
          handleChange={(e) => handleChange({ lastName: e.target.value })}
          value={editedTeacher?.lastName}
          labelText="Last Name"
          labelFor="lastName"
          id="lastName"
          name="lastName"
          type="text"
          isRequired={true}
          placeholder="Last Name"
        />
        <InputField
          handleChange={(e) => handleChange({ email: e.target.value })}
          value={editedTeacher?.email}
          labelText="Email"
          labelFor="email"
          id="email"
          name="email"
          type="email"
          isRequired={true}
          placeholder="Email"
        />
        <InputField
          handleChange={(e) => handleChange({ street: e.target.value })}
          value={editedTeacher?.street}
          labelText="Street"
          labelFor="street"
          id="street"
          name="street"
          type="text"
          isRequired={true}
          placeholder="Street"
        />
        <InputField
          handleChange={(e) => handleChange({ postalCode: e.target.value })}
          value={editedTeacher?.postalCode}
          labelText="Postal Code"
          labelFor="postalCode"
          id="postalCode"
          name="postalCode"
          type="text"
          isRequired={true}
          placeholder="Postal Code"
        />
        <InputField
          handleChange={(e) => handleChange({ city: e.target.value })}
          value={editedTeacher?.city}
          labelText="City"
          labelFor="city"
          id="city"
          name="city"
          type="text"
          isRequired={true}
          placeholder="City"
        />
        <InputField
          handleChange={(e) => handleChange({ country: e.target.value })}
          value={editedTeacher?.country}
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
          variant="bg-pink-700"
          disabled={loading}
        />
      </form>
    </>
  );
};

export default TeacherEditForm;
