import React from "react";
import { ForumPostType } from "../../../interfaces";

const ForumPost: React.FC<ForumPostType> = ({
  title,
  description,
  category,
  hashtags,
}) => {
  return (
    <div className="forum-post">
      <div className="forum-post-inner">
        <h3>{title}</h3>
        <p>{description}</p>
        <small>{category}</small>
        <div className="hashtags-wrapper">
          {hashtags.map((hashtag, index) => (
            <span key={index}>{hashtag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForumPost;
