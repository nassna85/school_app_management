import { IoClose } from "react-icons/io5";
import { FC } from "react";

type CloseButtonProps = {
  onClick: () => void;
};

const CloseButton: FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <button className="p-2" onClick={onClick}>
      <IoClose size="22px" />
    </button>
  );
};

export default CloseButton;
