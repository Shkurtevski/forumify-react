import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-wrapper">
          <div className="logo">
            <h2>Forumify.</h2>
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
