import withHandleResource from "@/hoc/withEditableResource";
import { ITeacher } from "@/interfaces/ITeacher";
import { FC, FormEvent, useEffect } from "react";
import Button from "@/components/Global/UI/Buttons/Button";
import InputField from "@/components/Global/UI/Forms/InputField/InputField";
import usePostFetch from "@/hooks/usePostFetch";
import useTeacher from "@/hooks/useTeacher";

type TeacherEditForm2Props = {
  teacher: ITeacher;
  onChange: ({}) => void;
  onReset: () => void;
  onCloseDrawer: () => void;
  data: ITeacher;
  setData: (obj: object) => void;
};

const TeacherEditForm2: FC<TeacherEditForm2Props> = ({
  onReset,
  onChange,
  onCloseDrawer,
  data,
  teacher,
  setData,
}) => {
  const { send, loading } = usePostFetch(`/teachers/${teacher?._id}`, "PUT");
  const { updateTeacher } = useTeacher();
  console.log(data);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
    return;
    const res = await send(data);
    onCloseDrawer();
    updateTeacher(data._id, res);
  };

  useEffect(() => {
    setData(teacher);
  }, []);
  return (
    <>
      <div className="flex justify-end">
        <Button
          label="Reset"
          isLoading={false}
          type="button"
          variant="bg-blue-700"
          disabled={false}
          onClick={onReset}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <InputField
          handleChange={(e) => onChange({ firstName: e.target.value })}
          value={data?.firstName}
          labelText="First Name"
          labelFor="firstName"
          id="firstName"
          name="firstName"
          type="text"
          isRequired={true}
          placeholder="First Name"
        />
        <InputField
          handleChange={(e) => onChange({ lastName: e.target.value })}
          value={teacher?.lastName}
          labelText="Last Name"
          labelFor="lastName"
          id="lastName"
          name="lastName"
          type="text"
          isRequired={true}
          placeholder="Last Name"
        />
        <InputField
          handleChange={(e) => onChange({ email: e.target.value })}
          value={teacher?.email}
          labelText="Email"
          labelFor="email"
          id="email"
          name="email"
          type="email"
          isRequired={true}
          placeholder="Email"
        />
        <InputField
          handleChange={(e) => onChange({ street: e.target.value })}
          value={teacher?.street}
          labelText="Street"
          labelFor="street"
          id="street"
          name="street"
          type="text"
          isRequired={true}
          placeholder="Street"
        />
        <InputField
          handleChange={(e) => onChange({ postalCode: e.target.value })}
          value={teacher?.postalCode}
          labelText="Postal Code"
          labelFor="postalCode"
          id="postalCode"
          name="postalCode"
          type="text"
          isRequired={true}
          placeholder="Postal Code"
        />
        <InputField
          handleChange={(e) => onChange({ city: e.target.value })}
          value={teacher?.city}
          labelText="City"
          labelFor="city"
          id="city"
          name="city"
          type="text"
          isRequired={true}
          placeholder="City"
        />
        <InputField
          handleChange={(e) => onChange({ country: e.target.value })}
          value={teacher?.country}
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

export default withHandleResource(TeacherEditForm2);
