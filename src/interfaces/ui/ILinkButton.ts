import { ReactNode } from "react";

export default interface ILinkButton {
  children: ReactNode;
  path: string;
  variant: "default" | "primary" | "secondary";
  border?: "rounded" | "rounded-50";
}
