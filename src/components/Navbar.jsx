import { NavLink } from "react-router-dom";
import { FaHome, FaInfoCircle, FaPhone, FaPlus, FaList } from "react-icons/fa";
import '../Navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"><NavLink to="/">⚛ ReactSite</NavLink></div>

      <ul className="nav-links">
        <li>
          <NavLink to="" end>
            <FaHome /> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            <FaInfoCircle /> About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            <FaPhone /> Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-post">
            <FaPlus /> Add Post
          </NavLink>
        </li>
        <li>
          <NavLink to="/post-list">
            <FaList /> Post List
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
