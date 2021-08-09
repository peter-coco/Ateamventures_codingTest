import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import navbarLogo from "../images/company_logo.png";
import Actions from "../redux/actions";
import { GlobalState } from "../redux/reducer";

const NavbarSuboptionsWrap = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 2;
  display: flex;
  /* flex-direction: column; */
  /* padding: 20px 16px; */
  /* box-sizing: border-box; */
`;

const NavbarSuboptionsContents = styled.div`
  width: 80%;
  height: 100%;
  /* position: fixed; */
  background-color: #ffffff;
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: 20px 16px;
  box-sizing: border-box;
`;

const NavbarSuboptionsBackground = styled.div`
  width: 20%;
  height: 100%;
  /* position: fixed; */
  background-color: #000000;
  opacity: 50%;
`;

const NavbarLogoWrap = styled.div`
  width: 92px;
  height: 12px;
`;
const NavbarLogo = styled.img`
  width: 100%;
  height: 100%;
`;

const NavbarDivider = styled.div`
  width: 100%;
  height: 2px;
  background-color: #e5e5e5;
  margin-top: 16px;
`;

const NavbarBottom = styled.div`
  margin-top: 36px;
`;
const NavbarOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const NavbarOption = styled.div`
  //styleName: 14pt - 500;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0px;
  /* text-align: left; */
`;

const NavbarSuboptions = () => {
  const navbarMenuToggle = useSelector<GlobalState, boolean>(
    (state) => state.navbarMenuToggle
  );

  const dispatch = useDispatch();
  useEffect(() => {
    function resizeEventFunc() {
      if (
        window.innerWidth >
        800 /*&& !headerMenuBtnActivate addEventListener가 시작되면서 얘는 고정이 되버림ggg*/
      ) {
        dispatch({
          type: Actions.RESET_NAVBAR_MENU,
        });
      }
    }

    window.addEventListener("resize", resizeEventFunc);
    return () => window.removeEventListener("resize", resizeEventFunc);
  }, []);

  const resetNavbarSuboptions = () => {
    if (navbarMenuToggle) {
      dispatch({
        type: Actions.RESET_NAVBAR_MENU,
      });
    }
  };

  return (
    <NavbarSuboptionsWrap
      style={{ display: navbarMenuToggle ? "flex" : "none" }}
    >
      <NavbarSuboptionsContents>
        <NavbarLogoWrap>
          <NavbarLogo src={navbarLogo} />
        </NavbarLogoWrap>
        <NavbarDivider />
        <NavbarBottom>
          <NavbarOptions>
            <NavbarOption>파트너정밀가공</NavbarOption>
            <NavbarOption>로그아웃</NavbarOption>
          </NavbarOptions>
        </NavbarBottom>
      </NavbarSuboptionsContents>
      <NavbarSuboptionsBackground onClick={resetNavbarSuboptions} />
    </NavbarSuboptionsWrap>
  );
};
export default NavbarSuboptions;
