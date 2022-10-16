import { ActionMeta } from "react-select";

export type OptionsType = {
  label: string;
  value: string;
};

export default interface ISelectField {
  name: string;
  options: OptionsType[];
  onChange: (
    option: readonly OptionsType[],
    actionMeta: ActionMeta<OptionsType>
  ) => void;
  label: string;
  isMulti?: boolean;
}
