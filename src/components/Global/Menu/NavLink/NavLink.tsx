import { Link } from "react-router-dom";

import INavLink from "@/interfaces/ui/INavLink";
import { FC } from "react";

const NavLink: FC<INavLink> = ({ path, name, children }) => {
  return (
    <li className="text-gray-300 flex items-center mb-3">
      {children}
      <Link className="text-sm pl-1" to={path}>
        {name}
      </Link>
    </li>
  );
};

export default NavLink;
