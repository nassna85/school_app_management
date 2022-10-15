import { FiUser, FiStar } from "react-icons/fi";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { resetAuthorizationAxios } from "@/utils/axios";
import { logout } from "@/features/auth/authSlice";

import Button from "@/components/Global/UI/Buttons/Button/Button";
// import { persistor } from "@/app/store";

const UserNav = () => {
  const { me } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    resetAuthorizationAxios();
    /*persistor.pause();
    persistor.flush().then(() => {
      return persistor.purge();
    });*/
    window.location.href = "/login";
  };
  return (
    <div className="mb-5">
      <div className="flex items-center">
        <FiUser className="text-gray-300 mr-2" />
        <span className="text-gray-300">
          {" "}
          {me?.firstName} {me?.lastName}
        </span>
      </div>
      {me?.role?.includes("ROLE_ADMIN") && (
        <div className="flex items-center my-2">
          <FiStar className="text-yellow-500 mr-2" />
          <span className="text-gray-300">Administrator</span>
        </div>
      )}
      <Button
        label="Logout"
        isLoading={false}
        type="button"
        variant="primary"
        border="rounded"
        disabled={false}
        onClick={handleLogout}
      />
    </div>
  );
};

export default UserNav;
