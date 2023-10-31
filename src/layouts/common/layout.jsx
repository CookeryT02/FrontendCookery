import { Outlet } from "react-router-dom"
import Footer from "../../components/common/footer/footer"
import Header from "../../components/common/header/header"

const CommonLayout = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default CommonLayout
