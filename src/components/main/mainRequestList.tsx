import React, { useEffect } from "react";
import styled from "styled-components";

const MainRequestListWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  width: 366px;
  height: 356px;
  box-sizing: border-box;
  border: 2px solid #e5e5e5;
  border-radius: 4px;

  &:hover {
    border: 2px solid #2196f3;
  }
`;
const MainRequestListsTop = styled.div`
  display: flex;
  flex-direction: column;
`;
const MainRequestListsTopTitle = styled.div`
  //styleName: 16pt - 600 (소제목);
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0px;

  /* text-align: left; */
`;
const MainRequestListsTopSubscription = styled.div`
  //styleName: 14pt - 500;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0px;
  margin-bottom: 24px;
  /* text-align: left; */
`;
const MainRequestListsTopDuedate = styled.div`
  //styleName: 14pt - 400 (본문용);
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  color: #939fa5;
  margin-bottom: 16px;
  /* text-align: left; */
`;
const MainRequestListsDivider = styled.div`
  width: 334px;
  height: 1px;
  background-color: #e5e5e5;
`;
const MainRequestListsBottom = styled.div`
  margin-top: 31px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const MainRequestListsBottomSubsCriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const MainRequestListsBottomSubsCription = styled.div`
  display: flex;
  gap: 32px;
`;
const MainRequestListsBottomSubsCriptionTitle = styled.div`
  width: 70px;
  height: 20px;

  //styleName: 14pt - 400 (본문용);
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  /* text-align: left; */
`;
const MainRequestListsBottomSubsCriptionContext = styled.div`
  width: 232px;
  height: 20px;

  //styleName: 14pt - 600;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0px;
  /* text-align: left; */
`;
const MainRequestListsBottomButtons = styled.div`
  display: flex;
  gap: 8px;
`;
const MainRequestListsBottomButtonRequest = styled.div`
  height: 32px;
  width: 108px;
  border-radius: 4px;
  padding: 6px, 12px, 6px, 12px;
  line-height: 32px;
  text-align: center;
  font-size: 14px;
  color: #ffffff;
  box-sizing: border-box;
  background-color: #2196f3;
`;

const MainRequestListsBottomButtonChat = styled.div`
  height: 32px;
  width: 76px;
  border-radius: 4px;
  padding: 6px, 12px, 6px, 12px;
  line-height: 32px;
  text-align: center;
  font-size: 14px;
  color: #2196f3;
  box-sizing: border-box;
  border: 1px solid #2196f3;
  /* background-color: #080808; */
`;

const MainRequestList = () => {
  return (
    <MainRequestListWrap>
      <MainRequestListsTop>
        <MainRequestListsTopTitle>자동차 시제품 제작</MainRequestListsTopTitle>
        <MainRequestListsTopSubscription>
          A 고객사
        </MainRequestListsTopSubscription>
        <MainRequestListsTopDuedate>
          2020.12.13까지 납기
        </MainRequestListsTopDuedate>
      </MainRequestListsTop>
      <MainRequestListsDivider />
      <MainRequestListsBottom>
        <MainRequestListsBottomSubsCriptionWrap>
          <MainRequestListsBottomSubsCription>
            <MainRequestListsBottomSubsCriptionTitle>
              도면개수
            </MainRequestListsBottomSubsCriptionTitle>
            <MainRequestListsBottomSubsCriptionContext>
              111
            </MainRequestListsBottomSubsCriptionContext>
          </MainRequestListsBottomSubsCription>

          <MainRequestListsBottomSubsCription>
            <MainRequestListsBottomSubsCriptionTitle>
              총 수량
            </MainRequestListsBottomSubsCriptionTitle>
            <MainRequestListsBottomSubsCriptionContext>
              111
            </MainRequestListsBottomSubsCriptionContext>
          </MainRequestListsBottomSubsCription>

          <MainRequestListsBottomSubsCription>
            <MainRequestListsBottomSubsCriptionTitle>
              가공방식
            </MainRequestListsBottomSubsCriptionTitle>
            <MainRequestListsBottomSubsCriptionContext>
              111
            </MainRequestListsBottomSubsCriptionContext>
          </MainRequestListsBottomSubsCription>

          <MainRequestListsBottomSubsCription>
            <MainRequestListsBottomSubsCriptionTitle>
              재료
            </MainRequestListsBottomSubsCriptionTitle>
            <MainRequestListsBottomSubsCriptionContext>
              111
            </MainRequestListsBottomSubsCriptionContext>
          </MainRequestListsBottomSubsCription>
        </MainRequestListsBottomSubsCriptionWrap>

        <MainRequestListsBottomButtons>
          <MainRequestListsBottomButtonRequest>
            요청 내역 보기
          </MainRequestListsBottomButtonRequest>
          <MainRequestListsBottomButtonChat>
            채팅하기
          </MainRequestListsBottomButtonChat>
        </MainRequestListsBottomButtons>
      </MainRequestListsBottom>
    </MainRequestListWrap>
  );
};
export default MainRequestList;
