import React from "react";

interface Children {
  children: React.ReactNode;
}

const Container: React.FC<Children> = ({ children }) => {
  return <main className="container">{children}</main>;
};

export default Container;
