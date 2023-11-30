
import { Navigate } from "react-router-dom";
import { constants } from "../../constants";
import { useSelector } from "react-redux";

const { routes, website } = constants


const AuthLayout = () => {

  const { isLoggedIn, user } = useSelector((state) => state.auth)


  if (!isLoggedIn) return <Navigate to={routes.home} />

  console.log(isLoggedIn)
  return (
    <Navigate to={routes.login} />
  );
};

export default AuthLayout;
