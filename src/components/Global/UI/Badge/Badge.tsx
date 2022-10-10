import { FC, ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant: "bg-pink-200" | "bg-blue-700" | "bg-teal-500";
  color: "text-pink-900" | "text-blue-800" | "text-teal-600";
};

const Badge: FC<BadgeProps> = ({ children, variant, color }) => {
  return (
    <span className={`${variant} ${color} py-1 px-3 rounded-full text-xs`}>
      {children}
    </span>
  );
};

export default Badge;
