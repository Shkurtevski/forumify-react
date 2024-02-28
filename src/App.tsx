import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Container from "./containers/Container";
import "./css/main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forum from "./components/Forum/Forum";
import { ForumProvider } from "./contexts/useForumContext";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <ForumProvider>
          <Navbar />
          <Container>
            <Routes>
              <Route path="/" element={<Forum />} />
            </Routes>
          </Container>
        </ForumProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
