import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Container from "./containers/Container";
import "./css/main.scss";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <div></div>
      </Container>
    </React.Fragment>
  );
}

export default App;
