import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const UserLayout = () => {
  //merkazi state e git , kullanici yoksa kullaniciya giris izni verme firbbidden sayfasina veya login sayfasina yonlendir
  
 const {isLoggedIn} = useSelector((state)=>state.auth);
 console.log(isLoggedIn);

 //TODO: isLoggedIn === false ise login sayfasina yonlendir
 if(isLoggedIn){
   return <Navigate to={"/login"}/>
 }

 return (
    <>
      <Outlet/>
    </>
  )
}

export default UserLayout