import Sidenav from "./Sidenav";
import "../styles/home.css";
import Navbar from "./Navbar";
import { user, posts } from "../dummyData/data";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";

const HomePage = () => {
  const totalActiveUser = user.filter(
    (eachItem) => eachItem.active_in_last_24_hours === true
  ).length;
  const totalActivePost = posts.filter(
    (post) => post.published_in_last_24_hours
  ).length;

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
          <div className="container">
            <h1 className="homeTitle">Admin Dashboard</h1>
            <div className="kpiContainer">
              <div className="kpiBox">
                <h4>Total Users</h4>
                <p style={{ color: "#737373", marginBottom: "10px" }}>
                  All
                  <BiUpArrowAlt style={{ color: "green" }} />
                </p>
                <p>{user.length * 1000}</p>
              </div>
              <div className="kpiBox">
                <h4>Total Posts</h4>
                <p style={{ color: "#737373", marginBottom: "10px" }}>
                  All
                  <BiUpArrowAlt style={{ color: "green" }} />
                </p>
                <p> {posts.length * 1000}</p>
              </div>
              <div className="kpiBox">
                <h4>Users Active in Last 24 Hours</h4>
                <p style={{ color: "#737373", marginBottom: "10px" }}>
                  All
                  <BiDownArrowAlt style={{ color: "red" }} />
                </p>
                {totalActiveUser * 500}
              </div>
              <div className="kpiBox">
                <h4>Posts Published in Last 24 Hours</h4>
                <p style={{ color: "#737373", marginBottom: "10px" }}>
                  All
                  <BiDownArrowAlt style={{ color: "red" }} />
                </p>
                {totalActivePost * 200}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
