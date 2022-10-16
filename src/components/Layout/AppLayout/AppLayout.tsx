import { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/app/hooks";

import Sidebar from "@/components/Global/Menu/Sidebar/Sidebar";
import { getMe } from "@/features/user/userSlice";
import SpinnerLoader from "@/components/Global/UI/Loaders/SpinnerLoader/SpinnerLoader";
import { logout } from "@/features/auth/authSlice";

const AppLayout: FC = () => {
  const { me, errorMessage } = useAppSelector((state) => state.user);
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  // @ts-ignore
  useEffect(() => {
    if (user === null) {
      return (window.location.href = "/login");
    }
    if (user && errorMessage) {
      dispatch(logout());
      return (window.location.href = "/login");
    }
    dispatch(getMe());
  }, [user]);
  return !me?._id ? (
    <SpinnerLoader />
  ) : (
    <div className="flex">
      <Sidebar />
      <main className="p-5 grow bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
