import React, { useEffect } from "react";
import styled from "styled-components";

const MainConsultingToggleOptionWrap = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;
const MainConsultingToggleBtn = styled.div`
  width: 34px;
  height: 14px;
  background-color: #c2c2c2;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

const MainConsultingToggleBtnCircle = styled.div`
  /* position: absolute; */
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #f5f5f5;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
`;

const MainConsultingToggleTitle = styled.div`
  //styleName: 14pt - 500;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
`;

const MainConsultingToggleOption = () => {
  return (
    <MainConsultingToggleOptionWrap>
      <MainConsultingToggleBtn>
        <MainConsultingToggleBtnCircle />
      </MainConsultingToggleBtn>
      <MainConsultingToggleTitle>
        상담 중인 요청만 보기
      </MainConsultingToggleTitle>
    </MainConsultingToggleOptionWrap>
  );
};
export default MainConsultingToggleOption;
