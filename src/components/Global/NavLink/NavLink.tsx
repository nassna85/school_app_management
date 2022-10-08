import { Link } from "react-router-dom";

import INavLink from "@/interfaces/INavLink";
import { FC } from "react";

const NavLink: FC<INavLink> = ({ path, name, children }) => {
  return (
    <li className="text-white flex items-center mb-2">
      {children}
      <Link className="text-white text-sm pl-1" to={path}>
        {name}
      </Link>
    </li>
  );
};

export default NavLink;
