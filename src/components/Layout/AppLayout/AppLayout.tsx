import { FC } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "@/components/Global/Menu/Sidebar/Sidebar";

const AppLayout: FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="p-5 grow bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
