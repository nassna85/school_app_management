import { data } from "./Nav.data";

import Divider from "@/components/Global/UI/Divider/Divider";
import NavLink from "@/components/Global/Menu/NavLink/NavLink";

const Nav = () => {
  return (
    <>
      <small className="text-gray-400 uppercase text-xs">Navigation</small>
      <Divider />
      <nav className="my-3">
        <ul>
          {data?.map((link, i) => (
            <NavLink key={i} path={link?.path} name={link?.name}>
              {link?.icon}
            </NavLink>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
