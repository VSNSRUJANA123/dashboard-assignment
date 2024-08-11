import Sidenav from "./Sidenav";
import "../styles/home.css";
import Navbar from "./Navbar";
import { useState } from "react";
import { posts } from "../dummyData/data";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
const PostPage = () => {
  const [allposts, setPosts] = useState(posts);
  const [hide, setHide] = useState("");
  const handleDeletePost = (postId) => {
    const updatedPosts = allposts.filter((post) => post.post_id !== postId);
    setPosts(updatedPosts);
  };
  const handleHidePost = (postId) => {
    const hidePosts = allposts.map((post) => {
      if (post.post_id === postId) {
        return { ...post, hideStatus: true };
      }
      return post;
    });
    setPosts(hidePosts);
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
          <h1 className="homeTitle">Posts Listing</h1>
          <div className="posts-box-container">
            <div className="kpiBox">
              <h4>Total Posts</h4>
              <p style={{ color: "#737373", marginBottom: "10px" }}>
                All
                <BiUpArrowAlt style={{ color: "green" }} />
              </p>
              <p>{allposts.length * 500}</p>
            </div>
            <div className="kpiBox">
              <h4>Posts in the Last 24 Hours</h4>
              <p style={{ color: "#737373", marginBottom: "10px" }}>
                All
                <BiDownArrowAlt style={{ color: "red" }} />
              </p>
              <p>
                {allposts.filter((post) => post.published_in_last_24_hours)
                  .length * 100}
              </p>
            </div>
          </div>
        </div>
        <div className="responsive-table ">
          <table className="users-table">
            <thead>
              <tr>
                <th>Post ID</th>
                <th>Caption</th>
                <th>Media URL</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allposts.map((post) => (
                <tr
                  key={post.post_id}
                  className={post.hideStatus && "hide-status"}
                >
                  <td>{post.post_id}</td>
                  <td>{post.post_caption}</td>
                  <td>
                    <a
                      href={post.media_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {post.media_url}
                    </a>
                  </td>
                  <td>
                    <button onClick={() => handleDeletePost(post.post_id)}>
                      Delete
                    </button>
                    <button onClick={() => handleHidePost(post.post_id)}>
                      Hide
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

export default PostPage;
