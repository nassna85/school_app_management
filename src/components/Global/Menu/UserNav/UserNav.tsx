import { useAppDispatch } from "@/app/hooks";
import Button from "@/components/Global/UI/Buttons/Button";
import { logout } from "@/features/auth/authSlice";
import { resetAuthorizationAxios } from "@/utils/axios";

const UserNav = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    resetAuthorizationAxios();
    window.location.href = "/login";
  };
  return (
    <div className="text-white mb-5">
      <p className="opacity-50">Get name for current user</p>
      <Button
        label="Logout"
        isLoading={false}
        type="button"
        variant="bg-pink-700"
        disabled={false}
        onClick={handleLogout}
      />
    </div>
  );
};

export default UserNav;
