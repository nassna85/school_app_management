import { FC } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "@/components/Global/Menu/Sidebar/Sidebar";

const AppLayout: FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="pl-5 grow">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
