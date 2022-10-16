import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "@/app/hooks";
import { logout } from "@/features/auth/authSlice";
import { resetAuthorizationAxios } from "@/utils/axios";
import { removeKeyFromLocalstorage } from "@/utils/token";
import { NAME_TOKEN_IN_LOCALSTORAGE } from "@/constants";

const UnauthorizedPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(logout());
      resetAuthorizationAxios();
      removeKeyFromLocalstorage(NAME_TOKEN_IN_LOCALSTORAGE);
      return navigate("/login");
    }, 5000);
  }, [dispatch, navigate]);
  return (
    <div>
      <h1>Unauthorized</h1>
      <p>Redirect to form login in 5 sec...</p>
    </div>
  );
};

export default UnauthorizedPage;
