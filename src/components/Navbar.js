import "../styles/sidenav.css";
import profile from "../profile1.png";
import { IoIosMenu } from "react-icons/io";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handelMenu = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <div className="top-nav">
        <div className="menu-container">
          <div className="icon-div">
            <IoIosMenu className="icon" onClick={handelMenu} />
          </div>
          <Link className="link" to="/">
            <h2>Twitter</h2>
          </Link>
        </div>
        <nav className="profile-container">
          <img className="profile" src={profile} alt="profile" />
          <p>John Wayne</p>
        </nav>
      </div>
      <ul className={`mini-nav ${menu && "close-mini-nav"}`}>
        <li>
          <NavLink className="link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/posts">
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/users">
            Users
          </NavLink>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Navbar;
