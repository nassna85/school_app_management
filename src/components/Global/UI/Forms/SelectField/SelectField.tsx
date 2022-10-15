import Select from "react-select";

import ISelectField from "@/interfaces/ui/ISelectField";
import { FC } from "react";

const SelectField: FC<ISelectField> = ({ onChange, options, name, label }) => {
  /*const selectMenuClose = () => {
    console.log("close menu");
  };*/
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Select
        id={name}
        onChange={onChange}
        options={options}
        name={name}
        isMulti={true}
      />
    </div>
  );
};

export default SelectField;
