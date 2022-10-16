import { FC } from "react";

import IInputField from "@/interfaces/ui/IInputField";
import { InputFieldStyle } from "@/components/Global/UI/Forms/InputField/InputField.style";
import { InputErrorMessageStyle } from "@/components/Global/UI/Forms/InputErrorMessageStyle";
import InputLabel from "@/components/Global/UI/Forms/InputLabel/InputLabel";

const InputField: FC<IInputField> = ({
  onChange,
  value,
  labelText,
  name,
  type,
  required = true,
  placeholder,
  error,
}) => {
  return (
    <div className="my-2">
      <InputLabel labelText={labelText} htmlFor={name} />
      <InputFieldStyle
        onChange={onChange}
        value={value}
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        error={error}
      ></InputFieldStyle>
      {error && <InputErrorMessageStyle>{error}</InputErrorMessageStyle>}
    </div>
  );
};

export default InputField;
