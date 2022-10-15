import { ActionMeta } from "react-select";

import InputField from "@/components/Global/UI/Forms/InputField/InputField";
import { ChangeEvent, FormEvent, useState } from "react";
import { ITeacher } from "@/interfaces/scope/teacher/ITeacher";
import Button from "@/components/Global/UI/Buttons/Button/Button";
import SelectField from "@/components/Global/UI/Forms/SelectField/SelectField";
import { OptionsType } from "@/interfaces/ui/ISelectField";
import { IClassrooms } from "@/interfaces/scope/classroom/IClassroom";

const TeacherNewForm = () => {
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

  const options = [
    {
      value: "blablabla",
      label: "Première primaire",
    },
    {
      value: "papapapa",
      label: "Deuxième primaire",
    },
  ];

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(teacher);
  };
  return (
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
          {/* Todo Add select for classrooms */}
          <SelectField
            name="classrooms"
            options={options}
            onChange={handleSelectChange}
            label="Classrooms"
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
        <Button
          label="Add Teacher"
          isLoading={false}
          type="submit"
          variant="primary"
          disabled={false}
          border="rounded"
        />
      </form>
    </>
  );
};

export default TeacherNewForm;
