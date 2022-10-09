import React, { FC, ReactNode } from "react";

type AlertProps = {
  children: ReactNode;
  type: "bg-red-500" | "bg-green-600" | "bg-blue-400";
};

const Alert: FC<AlertProps> = ({ children, type }) => {
  return (
    <div className={`${type} text-white w-full p-3 rounded my-4`}>
      {children}
    </div>
  );
};

export default Alert;
