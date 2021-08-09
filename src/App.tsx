import React from "react";
import logo from "./logo.svg";
import "./App.css";

import styled from "styled-components";

import Navbar from "./components/navbar";
import Main from "./components/main/main";

import { Provider } from "react-redux";
import store from "./redux/index";

const BackgroudWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
`;

function App() {
  return (
    <Provider store={store}>
      <BackgroudWrap>
        <Navbar />
        <Main />
      </BackgroudWrap>
    </Provider>
  );
}

export default App;
