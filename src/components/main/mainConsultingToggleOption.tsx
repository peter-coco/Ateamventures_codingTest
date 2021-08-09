import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Actions from "../../redux/actions";
import { GlobalState } from "../../redux/reducer";

const MainConsultingToggleOptionWrap = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  /* @media (max-width: 1000px) {
    display: none;
  } */
`;
const MainConsultingToggleBtn = styled.div`
  width: 34px;
  height: 14px;
  background-color: #c2c2c2;
  border-radius: 10px;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
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
  const dispatch = useDispatch();
  const [requestListOnConsultingToggle] = useSelector<GlobalState, [boolean]>(
    (state) => [state.requestListOnConsultingToggle]
  );

  const toggleViewConsultingFunc = () => {
    dispatch({
      type: Actions.SET_REQUEST_LISTS_ON_CONSULTING_TOGGLE,
    });
  };

  return (
    <MainConsultingToggleOptionWrap>
      <MainConsultingToggleBtn
        style={{
          // transform: requestListOnConsultingToggle ? "translateX(15px)" : "",
          transition: "all 300ms",
          backgroundColor: requestListOnConsultingToggle ? "#BBDEFB" : "",
        }}
        onClick={toggleViewConsultingFunc}
      >
        <MainConsultingToggleBtnCircle
          style={{
            transform: requestListOnConsultingToggle ? "translateX(15px)" : "",
            transition: "all 300ms",
            backgroundColor: requestListOnConsultingToggle ? "#2196F3" : "",
          }}
        />
      </MainConsultingToggleBtn>
      <MainConsultingToggleTitle>
        상담 중인 요청만 보기
      </MainConsultingToggleTitle>
    </MainConsultingToggleOptionWrap>
  );
};
export default MainConsultingToggleOption;
