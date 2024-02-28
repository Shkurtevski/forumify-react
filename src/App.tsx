import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Container from "./containers/Container";
import "./css/main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forum from "./components/Forum/Forum";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<Forum />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
