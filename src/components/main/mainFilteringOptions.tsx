import React, { useEffect } from "react";
import styled from "styled-components";

const MainFilteringOptionsWrap = styled.div`
  display: flex;
  gap: 40px;
`;
const MainFilterOptions = styled.div`
  border: 1px solid #939fa5;
  padding: 10px 20px;
  box-sizing: border-box;
`;
const MainFilterTitle = styled.div``;
const MainFilterArrow = styled.div``;

const MainFilteringOptions = () => {
  return (
    <MainFilteringOptionsWrap>
      <MainFilterOptions>
        <MainFilterTitle>가공방식</MainFilterTitle>
        <MainFilterArrow />
      </MainFilterOptions>
      <MainFilterOptions>
        <MainFilterTitle>재료</MainFilterTitle>
        <MainFilterArrow />
      </MainFilterOptions>
    </MainFilteringOptionsWrap>
  );
};

export default MainFilteringOptions;
