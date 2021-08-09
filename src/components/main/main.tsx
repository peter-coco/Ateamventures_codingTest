import React, { useEffect } from "react";
import styled from "styled-components";

import MainTitle from "./mainTitle";
import MainFilteringOptions from "./mainFilteringOptions";
import MainConsultingToggleOption from "./mainConsultingToggleOption";
import MainRequestLists from "./mainRequestLists";
import { useSelector } from "react-redux";
import { GlobalState } from "../../redux/reducer";

const MainWrap = styled.div`
  width: 100%;
  /* height: calc(100% - 70px); */
  padding: 40px 155px 60px 155px;
  box-sizing: border-box;

  @media (max-width: 800px) {
    padding: 20px;
  }
`;

const MainOptionsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  /* flex-direction: row; */
  margin-top: 32px;

  @media (max-width: 800px) {
    flex-direction: column;
    /* justify-content: ""; */
    gap: 10px;
  }
`;

const Main = () => {
  const navbarMenuToggle = useSelector<GlobalState, boolean>(
    (state) => state.navbarMenuToggle
  );
  return (
    <MainWrap
    // style={{
    //   backgroundColor: navbarMenuToggle ? "#808080" : "",
    // }}
    >
      <MainTitle />
      <MainOptionsWrap>
        <MainFilteringOptions />
        <MainConsultingToggleOption />
      </MainOptionsWrap>
      <MainRequestLists />
    </MainWrap>
  );
};
export default Main;
