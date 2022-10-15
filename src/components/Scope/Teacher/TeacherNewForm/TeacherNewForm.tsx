import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import InputField from "@/components/Global/UI/Forms/InputField/InputField";
import Button from "@/components/Global/UI/Buttons/Button/Button";
import SelectField from "@/components/Global/UI/Forms/SelectField/SelectField";
import SpinnerLoader from "@/components/Global/UI/Loaders/SpinnerLoader/SpinnerLoader";

import { ITeacher } from "@/interfaces/scope/teacher/ITeacher";
import { OptionsType } from "@/interfaces/ui/ISelectField";
import { IClassrooms } from "@/interfaces/scope/classroom/IClassroom";
import useFetch from "@/hooks/useFetch";
import usePostFetch from "@/hooks/usePostFetch";

const TeacherNewForm = () => {
  const { loading, load, items: classrooms } = useFetch("classrooms");
  const { send, loading: postLoading } = usePostFetch("teachers", "POST");

  const [selectOptions, setSelectOptions] = useState<
    { label: string; value: string }[]
  >([]);

  const [teacher, setTeacher] = useState<ITeacher>({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    street: "",
    city: "",
    postalCode: "",
    classrooms: [],
  });

  const handleSelectChange = (options: readonly OptionsType[]) => {
    const classrooms: IClassrooms[] = [];
    options.forEach((option) => {
      classrooms.push({ _id: option.value, name: option.label });
    });
    setTeacher({ ...teacher, classrooms });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTeacher({ ...teacher, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await send(teacher);
    // TODO Update TeacherContext
  };

  useEffect(() => {
    const options: { label: string; value: string }[] = [];
    load();
    classrooms.forEach((item) => {
      // @ts-ignore
      options.push({ value: item._id, label: item.name });
    });
    setSelectOptions(options);
  }, [classrooms?.length]);
  return loading ? (
    <SpinnerLoader />
  ) : (
    <>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <InputField
            handleChange={handleChange}
            value={teacher.firstName}
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
            value={teacher.lastName}
            labelText="Last Name"
            labelFor="lastName"
            id="lastName"
            name="lastName"
            type="text"
            isRequired={true}
            placeholder="Last Name"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <InputField
            handleChange={handleChange}
            value={teacher.email}
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
            value={teacher.street}
            labelText="Street"
            labelFor="street"
            id="street"
            name="street"
            type="text"
            isRequired={true}
            placeholder="Street"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <InputField
            handleChange={handleChange}
            value={teacher.city}
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
            value={teacher.country}
            labelText="Country"
            labelFor="country"
            id="country"
            name="country"
            type="text"
            isRequired={true}
            placeholder="Country"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <InputField
            handleChange={handleChange}
            value={teacher.postalCode}
            labelText="Postal Code"
            labelFor="postalCode"
            id="postalCode"
            name="postalCode"
            type="text"
            isRequired={true}
            placeholder="Postal Code"
          />
          <SelectField
            name="classrooms"
            options={selectOptions}
            onChange={handleSelectChange}
            label="Classrooms"
          />
        </div>
        <Button
          label="Add Teacher"
          isLoading={postLoading}
          type="submit"
          variant="primary"
          disabled={postLoading}
          border="rounded"
        />
      </form>
    </>
  );
};

export default TeacherNewForm;
