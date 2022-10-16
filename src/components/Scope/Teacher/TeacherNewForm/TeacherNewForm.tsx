import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import InputField from "@/components/Global/UI/Forms/InputField/InputField";
import Button from "@/components/Global/UI/Buttons/Button/Button";
import SelectField from "@/components/Global/UI/Forms/SelectField/SelectField";
import SpinnerLoader from "@/components/Global/UI/Loaders/SpinnerLoader/SpinnerLoader";

import { OptionsType } from "@/interfaces/ui/ISelectField";
import { IClassrooms } from "@/interfaces/scope/classroom/IClassroom";
import useFetch from "@/hooks/useFetch";
import usePostFetch from "@/hooks/usePostFetch";
import useTeacher from "@/hooks/useTeacher";

const TeacherNewForm = () => {
  const navigate = useNavigate();
  const { loading, load, items: classrooms } = useFetch("classrooms");
  const {
    send,
    loading: postLoading,
    data,
    setData,
    handleChange,
  } = usePostFetch("teachers", "POST");
  const { saveTeacher } = useTeacher();

  const [selectOptions, setSelectOptions] = useState<
    { label: string; value: string }[]
  >([]);

  const handleSelectChange = (options: readonly OptionsType[]) => {
    const classrooms: IClassrooms[] = [];
    options.forEach((option) => {
      classrooms.push({ _id: option.value, name: option.label });
    });
    setData({ ...data, classrooms });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await send(data);
    saveTeacher(data);
    navigate("/teachers");
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
        </div>
        <div className="grid grid-cols-2 gap-4">
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
        </div>
        <div className="grid grid-cols-2 gap-4">
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
        </div>
        <div className="grid grid-cols-2 gap-4">
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
