import { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/app/hooks";

import Sidebar from "@/components/Global/Menu/Sidebar/Sidebar";
import { getMe } from "@/features/user/userSlice";
import SpinnerLoader from "@/components/Global/UI/Loaders/SpinnerLoader/SpinnerLoader";

const AppLayout: FC = () => {
  const { me } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  /*useEffect(() => {
    dispatch(getMe());
  }, []);*/
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
