import logo from "../../assets/logo.svg";
import "./style.css";
const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="footer-logo" />
      <hr />
      <h3>© 2024 All Rights Reserved - Batch-B2</h3>
    </div>
  );
};

export default Footer;
