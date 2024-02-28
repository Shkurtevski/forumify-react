import React from "react";
import ForumPost from "./sub-components/ForumPost";
import { useForumContext } from "../../contexts/useForumContext";

const Forum: React.FC = () => {
  const { forumPosts, isLoading, error } = useForumContext();

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
          <div className="forum-content-posts">
            {forumPosts &&
              forumPosts.map((forumPost) => (
                <ForumPost key={forumPost.id} {...forumPost} />
              ))}
          </div>
          <div className="forum-sidebar-menu"></div>
        </div>
      </div>
    </section>
  );
};

export default Forum;
