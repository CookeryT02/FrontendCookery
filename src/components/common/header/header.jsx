import HomeCarousel from "../carousel/carousel";
import MenuBar from "./menu-bar/menu-bar";
import TopBar from "./top-bar/top-bar";

const Header = () => {
  return (
    <div>
      <TopBar/>
      <MenuBar/>
      <HomeCarousel/>
    </div>
  )
};

export default Header;