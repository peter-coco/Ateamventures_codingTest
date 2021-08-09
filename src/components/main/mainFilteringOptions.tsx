import React, { useEffect } from "react";
import styled from "styled-components";
import { findConfigFile } from "typescript";

const MainFilteringOptionsWrap = styled.div`
  display: flex;
  gap: 8px;
`;
const MainFilterOptions = styled.div`
  border: 1px solid #939fa5;
  padding: 10px 20px;
  box-sizing: border-box;
  /* border: 1px solid #939fa5; */
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
const MainFilterTitle = styled.div`
  font-size: 12px;
`;
const MainFilterArrow = styled.div`
  border-top: 6px solid #939fa5;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
`;

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
