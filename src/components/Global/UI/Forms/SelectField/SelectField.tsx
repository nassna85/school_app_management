import { FC } from "react";
import Select from "react-select";

import ISelectField from "@/interfaces/ui/ISelectField";
import { InputErrorMessageStyle } from "@/components/Global/UI/Forms/InputErrorMessageStyle";

const fixedInputClass =
  "rounded appearance-none relative block w-full placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm";
const borderErrorClass = " border border-red-900";

// TODO Refactor to styled component

const SelectField: FC<ISelectField> = ({
  onChange,
  options,
  name,
  label,
  error,
}) => {
  return (
    <div className="my-2">
      <label className="text-xs text-gray-600" htmlFor={name}>
        {label}
      </label>
      <Select
        id={name}
        onChange={onChange}
        options={options}
        name={name}
        isMulti={true}
        className={error ? fixedInputClass + borderErrorClass : fixedInputClass}
      />
      {error && <InputErrorMessageStyle>{error}</InputErrorMessageStyle>}
    </div>
  );
};

export default SelectField;
