import { ChangeEvent } from "react";

export default interface IInputField {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string | number | undefined;
  labelText?: string;
  name: string;
  type: string;
  required: boolean;
  placeholder: string;
  error?: string;
}
