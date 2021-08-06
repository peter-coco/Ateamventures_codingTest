import React, { useEffect } from "react";
import styled from "styled-components";

import MainTitle from "./mainTitle";
import MainFilteringOptions from "./mainFilteringOptions";
import MainConsultingToggleOption from "./mainConsultingToggleOption";
import MainRequestLists from "./mainRequestLists";

const MainWrap = styled.div`
  width: 100%;
  height: calc(100% - 70px);
  padding: 40px 155px 60px 155px;
  box-sizing: border-box;
`;

const MainOptionsWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Main = () => {
  return (
    <MainWrap>
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
