import { useState } from "react";
import logo from "../../assets/logo.svg";
import "./style.css";
import { IoMdMenu } from "react-icons/io";
import Sidenav from "../Sidenav/Sidenav";
const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  return (
    <nav className="nav-container">
      <img src={logo} alt="logo" className="logo" />
      <div>
        {showModal ? (
          <Sidenav setShowModal={setShowModal} />
        ) : (
          <ul className="nav-list">
            <li style={{ color: "#00FFA7" }}>Company</li>
            <li>Services</li>
            <li>Buisness Model</li>
            <li>Blogs</li>
            <li>Contact Us</li>
          </ul>
        )}
        {showModal ? null : (
          <IoMdMenu className="menu-icon" onClick={handleShowModal} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
