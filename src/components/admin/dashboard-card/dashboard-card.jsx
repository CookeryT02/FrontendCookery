import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import "./dashboard-card.scss";

const DashboardCard = (props) => {
  return (
    <Link to={props.path}>
      <div className="dashboard-card" title={props.title}>
        <div className="content">
          <div className="title">
            <p>  <span>{props.title}</span></p>
          </div>
          <div className="item">
            {props.statistics || props.statistics === 0 ? (
              <p><span>{props.statistics}</span></p>
            ) : (
              <Spinner animation="border" size="sm" />
            )}
          </div>
        </div>
        <div className="icon">{props.icon}</div>
      </div>
    </Link>
  );
};

export default DashboardCard;
