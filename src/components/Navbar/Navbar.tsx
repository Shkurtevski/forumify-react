import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-wrapper">
          <div className="logo">
            <Link to="/">
              <h2>Forumify.</h2>
            </Link>
          </div>
          <div className="content-wrapper">
            <button className="btn">Create Post</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
