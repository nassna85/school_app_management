import { ChangeEvent, FC } from "react";

const fixedInputClass =
  "rounded appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm";

interface InputFieldProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string | undefined;
  labelText: string;
  labelFor: string;
  id: string;
  name: string;
  type: string;
  isRequired: boolean;
  placeholder: string;
  customClass?: string | undefined;
}

const InputField: FC<InputFieldProps> = ({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = true,
  placeholder,
  customClass,
}) => {
  return (
    <div className="my-2">
      <label htmlFor={labelFor} className="text-xs text-gray-600">
        {labelText}
      </label>
      <input
        onChange={handleChange}
        value={value}
        id={id}
        name={name}
        type={type}
        required={isRequired}
        className={
          customClass ? fixedInputClass + customClass : fixedInputClass
        }
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
