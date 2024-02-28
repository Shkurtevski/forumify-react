import React, { createContext, useContext } from "react";
import { ForumPostType } from "../interfaces";
import useFetch from "../custom-hooks/useFetch";

interface ForumContextType {
  forumPosts: ForumPostType[] | null;
  isLoading: boolean;
  error: string | null;
}

const ForumContext = createContext<ForumContextType>({
  forumPosts: null,
  isLoading: true,
  error: null,
});

export const useForumContext = () => {
  return useContext(ForumContext);
};

interface ForumProviderProps {
  children: React.ReactNode;
}

export const ForumProvider: React.FC<ForumProviderProps> = ({ children }) => {
  const {
    data: forumPosts,
    isLoading,
    error,
  } = useFetch<ForumPostType[]>("http://localhost:5001/forum_posts");

  return (
    <ForumContext.Provider value={{ forumPosts, isLoading, error }}>
      {children}
    </ForumContext.Provider>
  );
};
