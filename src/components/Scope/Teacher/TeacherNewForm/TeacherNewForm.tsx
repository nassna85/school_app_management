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
    errors,
    isSuccess,
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

  useEffect(() => {
    if (isSuccess) {
      saveTeacher(data);
      navigate("/teachers");
    }
  }, [isSuccess]);
  return loading ? (
    <SpinnerLoader />
  ) : (
    <>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
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
        </div>
        <div className="grid grid-cols-2 gap-4">
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
        </div>
        <div className="grid grid-cols-2 gap-4">
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
        </div>
        <div className="grid grid-cols-2 gap-4">
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
          <SelectField
            name="classrooms"
            options={selectOptions}
            onChange={handleSelectChange}
            label="Classrooms"
            error={errors["classrooms"]}
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
