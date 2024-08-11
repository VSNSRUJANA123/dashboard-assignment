import Sidenav from "./Sidenav";
import "../styles/home.css";
import Navbar from "./Navbar";
import { useState } from "react";
import { user } from "../dummyData/data";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
const UserPage = () => {
  const [users, setUsers] = useState(user);
  const handleBanUser = (userId) => {
    const upadteBanned = users.map((items) => {
      if (items.user_id === userId) {
        return { ...items, banned: true };
      }
      return items;
    });
    setUsers(upadteBanned);
  };

  const handleEditUser = (userId) => {
    alert(`Editing user with ID ${userId}`);
  };
  return (
    <div className="home-nav-container">
      <Sidenav />
      <div className="home-container">
        <Navbar />
        <section className="section-home">
          <h4>Twitter</h4>
          <p style={{ color: "#737373" }}>
            view the performance metrics of your key profile from the reporting
          </p>
        </section>
        <div className="container">
          <h1 className="homeTitle">Users Listing</h1>
          <div className="posts-box-container">
            <div className="kpiBox">
              <h3>Total Users</h3>
              <p style={{ color: "#737373", marginBottom: "10px" }}>
                All
                <BiUpArrowAlt style={{ color: "green" }} />
              </p>
              <p>{users.length * 100}</p>
            </div>
            <div className="kpiBox">
              <h3>Users Active in Last 24 Hours</h3>
              <p style={{ color: "#737373", marginBottom: "10px" }}>
                All
                <BiDownArrowAlt style={{ color: "red" }} />
              </p>
              <p>
                {users.filter((user) => user.active_in_last_24_hours).length *
                  100}
              </p>
            </div>
          </div>
        </div>
        <div className="responsive-table">
          <table className="users-table">
            <thead>
              <tr>
                <th>User ID</th>
                <th>Username</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.user_id}>
                  <td>{user.user_id}</td>
                  <td>{user.username}</td>
                  <td>{user.name}</td>
                  <td>
                    {user.email}
                    {user.banned && <p style={{ color: "red" }}>banned</p>}
                  </td>
                  <td>
                    <button onClick={() => handleBanUser(user.user_id)}>
                      Ban
                    </button>
                    <button onClick={() => handleEditUser(user.user_id)}>
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
