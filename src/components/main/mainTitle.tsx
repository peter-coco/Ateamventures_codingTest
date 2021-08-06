import React, { useEffect } from "react";
import styled from "styled-components";

const MainTitleWrap = styled.div`
  /* display: flex; */
`;
const MainTitleText = styled.div`
  //styleName: 20pt - 600;
  font-family: Noto Sans KR;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
`;
const MainTitleSubscription = styled.div`
  //styleName: 16pt - 400;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
`;

const MainTitle = () => {
  return (
    <MainTitleWrap>
      <MainTitleText>들어온 요청</MainTitleText>
      <MainTitleSubscription>
        파트너님에게 딱 맞는 요청서를 찾아보세요
      </MainTitleSubscription>
    </MainTitleWrap>
  );
};
export default MainTitle;
