import Card from "../Card/Card";
import "./style.css";
import icon from "../../assets/icon.svg";
import technologies from "./data.json";
const Services = () => {
  return (
    <div className="content2">
      <div className="head">
        <div>
          <h1>Services We Offer</h1>
          <p>
            Discover the digital possibilities for your brand with our
            comprehensive suite of services.
          </p>
        </div>
        <div>
          <img src={icon} alt="icon" className="icon" />
        </div>
      </div>
      <div className="card-container">
        {technologies.map((item) => (
          <Card key={item.title} title={item.title} color={item.color} />
        ))}
      </div>
    </div>
  );
};

export default Services;
