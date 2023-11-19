import { Spinner } from "react-bootstrap";
import "./page.scss";


const LoadingPage = () => {
  return (
    <div className="loading-page">
      <Spinner animation="border" variant="primary" />
      <div className="logo">
        <img src="/cookery-tech-logo.png" alt="" />
      </div>
    </div>
  )
}

export default LoadingPage