import { FC } from "react";

import IInputLabel from "@/interfaces/ui/IInputLabel";
import { InputLabelStyle } from "@/components/Global/UI/Forms/InputLabel/InputLabel.style";

const InputLabel: FC<IInputLabel> = ({ htmlFor, labelText }) => {
  return (
    <InputLabelStyle htmlFor={htmlFor} labelText={labelText}>
      {labelText}
    </InputLabelStyle>
  );
};

export default InputLabel;
