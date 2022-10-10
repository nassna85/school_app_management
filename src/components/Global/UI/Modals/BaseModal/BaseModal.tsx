import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

import CloseButton from "@/components/Global/UI/Buttons/CloseButton";
import SkeletonLoader from "@/components/Global/UI/Loaders/SkeletonLoader/SkeletonLoader";

type BaseModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  isLoading: boolean;
};

const BaseModal: FC<BaseModalProps> = ({
  children,
  isOpen,
  onClose,
  isLoading,
}) => {
  return createPortal(
    isOpen ? (
      <div
        onClick={onClose}
        className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 flex justify-center items-center"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded w-11/12 md:w-10/12 lg:w-5/12"
        >
          <div className="flex justify-between">
            <h2 className="font-bold text-gray-700 py-2 px-4">Logo Company</h2>
            <CloseButton onClick={onClose} />
          </div>
          <div className="w-full h-px bg-gray-900 bg-opacity-5" />
          {isLoading ? (
            <SkeletonLoader />
          ) : (
            <div className="p-4">{children}</div>
          )}
        </div>
      </div>
    ) : null,
    document.body
  );
};

export default BaseModal;
