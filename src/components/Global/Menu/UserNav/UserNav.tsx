import { useNavigate } from "react-router-dom";
import { FiUser, FiStar } from "react-icons/fi";

import { useAppSelector } from "@/app/hooks";
// import { resetAuthorizationAxios } from "@/utils/axios";
import AuthService from "@/services/AuthService";
import useAuth from "@/hooks/useAuth";

import Button from "@/components/Global/UI/Buttons/Button/Button";

const UserNav = () => {
  const navigate = useNavigate();
  // @ts-ignore
  const { setAuth } = useAuth();
  const { me } = useAppSelector((state) => state.user);

  const handleLogout = async () => {
    // dispatch(logout());
    try {
      await AuthService.logout();
      setAuth({});
      // resetAuthorizationAxios();
      navigate("/login");
    } catch (e) {
      console.log(e);
    }
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
