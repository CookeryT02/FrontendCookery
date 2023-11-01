import { Link } from "react-router-dom";
import "./quick-link.scss";


const QuickLink = (prop) => {

  const {direct, pathname, icon, text} = prop;

  return(
    <li className="quick-link">
      <Link
        to={direct}
        className={pathname === direct ? "active" : ""}>
        {icon} <span>{text}</span>
      </Link>
    </li>
  )

};
export default QuickLink;

