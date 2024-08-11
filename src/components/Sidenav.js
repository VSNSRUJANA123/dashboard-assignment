import { NavLink } from "react-router-dom";

import "../styles/sidenav.css";
const Sidenav = () => {
  return (
    <nav className="sidenav">
      <h1 className="">Dashboard</h1>
      <ul className="navbar">
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
    </nav>
  );
};

export default Sidenav;
