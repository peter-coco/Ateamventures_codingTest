import React from "react";
import logo from "./logo.svg";
import "./App.css";

import styled from "styled-components";

import Navbar from "./components/navbar";
import Main from "./components/main/main";

const BackgroudWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
`;

function App() {
  return (
    <BackgroudWrap>
      <Navbar />
      <Main />
    </BackgroudWrap>
  );
}

export default App;
