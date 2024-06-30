import { IoMdClose } from "react-icons/io";

const Sidenav = ({ setShowModal }) => {
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div className="nav-container2">
      <ul className="li-container">
        <li>
          <IoMdClose onClick={handleClose} />
        </li>
        <li>Company</li>
        <li>Services</li>
        <li>Buisness Model</li>
        <li>Blogs</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Sidenav;
