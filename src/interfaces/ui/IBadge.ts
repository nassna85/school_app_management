import { ReactNode } from "react";

export default interface IBadge {
  children: ReactNode;
  variant: "default" | "primary" | "secondary";
  border?: "rounded" | "rounded-50";
}
