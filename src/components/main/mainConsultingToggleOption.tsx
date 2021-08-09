import React, { useEffect } from "react";
import styled from "styled-components";

const MainConsultingToggleOptionWrap = styled.div``;
const MainConsultingToggleBtn = styled.div``;
const MainConsultingToggleTitle = styled.div``;

const MainConsultingToggleOption = () => {
  return (
    <MainConsultingToggleOptionWrap>
      <MainConsultingToggleBtn></MainConsultingToggleBtn>
      <MainConsultingToggleTitle>
        상담 중인 요청만 보기
      </MainConsultingToggleTitle>
    </MainConsultingToggleOptionWrap>
  );
};
export default MainConsultingToggleOption;
