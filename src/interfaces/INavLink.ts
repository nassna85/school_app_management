import { ReactNode } from "react";

export default interface INavLink {
  path: string;
  name: string;
  children: ReactNode;
}
