import { Navigate, Outlet, useLocation } from "react-router-dom"
import { constants } from "../../constants"
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Sidebar } from "../../components";
import "./style.scss"

const { routes } = constants;

const AdminLayout = () => {

  const { user } = useSelector((state) => state.auth);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])


  if (!user || !user?.roles?.includes("Administrator")) {
    return <Navigate to={routes.forbidden} />
  }

  return (
    <div className="admin-layout">
      <div className="admin-layout_sidebar">
        <Sidebar />
      </div>
      <div className="admin-layout_content">
        <Outlet />
      </div>
    </div>
  );
}
export default AdminLayout