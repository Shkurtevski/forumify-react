import React from "react";
import ForumPost from "./sub-components/ForumPost";
import useFetch from "../../custom-hooks/useFetch";
import { ForumPostType } from "../../interfaces";

const Forum: React.FC = () => {
  const {
    data: forumPosts,
    isLoading,
    error,
  } = useFetch<ForumPostType[]>("http://localhost:5001/forum_posts");

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <section className="forum">
      <div className="forum-container">
        <div className="forum-wrapper">
          {forumPosts &&
            forumPosts.map((forumPost) => (
              <ForumPost key={forumPost.id} {...forumPost} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Forum;
