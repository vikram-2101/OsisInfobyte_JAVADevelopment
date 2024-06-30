import "./style.css";
import arrow from "../../assets/arrow.svg";
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="text-container">
        <h1>Welcome</h1>
        <h1 className="second-header">To Batch-B2</h1>

        <h4>
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with release <br /> of Letraset sheets containing Lorem
          Ipsum passages, and more recently with desktop pu
        </h4>
      </div>
      <div className="btn">
        <p>Get Started</p>
        <img src={arrow} alt="arrow" />
      </div>
    </div>
  );
};

export default Hero;
