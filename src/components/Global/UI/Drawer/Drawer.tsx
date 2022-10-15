import { ReactNode, FC } from "react";
import { createPortal } from "react-dom";

import CloseButton from "@/components/Global/UI/Buttons/CloseButton/CloseButton";
import SkeletonLoader from "@/components/Global/UI/Loaders/SkeletonLoader/SkeletonLoader";

type DrawerProps = {
  isOpen: boolean;
  children: ReactNode;
  onCloseDrawer: () => void;
  isLoading: boolean;
};

const Drawer: FC<DrawerProps> = ({
  isOpen,
  children,
  onCloseDrawer,
  isLoading,
}) => {
  return createPortal(
    <div
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <div
        className={
          " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <div className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <div className="flex justify-between p-3">
            <header className="font-bold text-lg">Header</header>
            <CloseButton onClick={onCloseDrawer} />
          </div>
          <div className="w-full h-px bg-gray-900 bg-opacity-5 mt-0" />
          <div className="p-3">
            {isLoading ? <SkeletonLoader /> : <div>{children}</div>}
          </div>
        </div>
      </div>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={onCloseDrawer}
      ></section>
    </div>,
    document.body
  );
};

export default Drawer;
