import React, { useEffect } from "react";
import styled from "styled-components";

import MainRequestList from "./mainRequestList";

const MainRequestListsWrap = styled.div`
  margin-top: 32px;
`;

const MainRequestLists = () => {
  return (
    <MainRequestListsWrap>
      <MainRequestList />
    </MainRequestListsWrap>
  );
};
export default MainRequestLists;
