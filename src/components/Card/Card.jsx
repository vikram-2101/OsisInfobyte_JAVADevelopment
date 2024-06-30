import "./style.css";
import logo2 from "../../assets/logo2.svg";
import img from "../../assets/img.svg";
import button from "../../assets/button.svg";
const Card = ({ title, color }) => {
  return (
    <div
      className="card"
      style={{
        backgroundColor: `${color}`,
      }}
    >
      <div className="header">
        <img src={logo2} alt="logo2" className="logo2" />
        <h1 className="header-line">Join Development</h1>
      </div>
      <h1 className="content">{title}</h1>
      <img src={img} alt="photo" className="photo" />
      <div className="hr"> ────────────────────────</div>
      <div className="button-container">
        <h3>Explore</h3>
        <img src={button} alt="button" />
      </div>
    </div>
  );
};

export default Card;
