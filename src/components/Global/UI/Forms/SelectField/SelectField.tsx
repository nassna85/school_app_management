import Select from "react-select";

import ISelectField from "@/interfaces/ui/ISelectField";
import { FC } from "react";

const fixedInputClass =
  "rounded appearance-none relative block w-full placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm";

const SelectField: FC<ISelectField> = ({ onChange, options, name, label }) => {
  /*const selectMenuClose = () => {
    console.log("close menu");
  };*/
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
        className={fixedInputClass}
      />
    </div>
  );
};

export default SelectField;
