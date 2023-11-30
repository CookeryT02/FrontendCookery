import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { Footer, Header } from "../../components";

const UserLayout = () => {

  //merkazi state e git , kullanici yoksa kullaniciya giris izni verme forbbidden sayfasina veya login sayfasina yonlendir

  const { isLoggedIn } = useSelector((state) => state.auth);
  console.log(isLoggedIn);

  //TODO: isLoggedIn === false ise login sayfasina yonlendir
  if (!isLoggedIn) {
    return <Navigate to={"/login"} />
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default UserLayout