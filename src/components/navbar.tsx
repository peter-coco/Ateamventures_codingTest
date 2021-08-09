import React, { useEffect } from "react";
import styled from "styled-components";

import navbarLogo from "../images/company_logo.png";

import NavbarOnOffMenuBtn from "./navbarOnOffMenuBtn";

const NavbarWrap = styled.div`
  width: 100%;
  height: 70px;
  padding: 25px 40px;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: #1565c0;
  display: flex;

  @media (max-width: 800px) {
    justify-content: flex-start;
    gap: 20px;
  }
`;

const NavbarLogoWrap = styled.div`
  width: 153px;
  height: 20px;
`;
const NavbarLogo = styled.img`
  width: 100%;
  height: 100%;
`;

const NavbarMenuWrap = styled.div`
  //width: 40px;
  height: 25px;
  display: flex;
  gap: 20px;

  @media (max-width: 800px) {
    display: none;
  }
`;

const NavbarMenu = styled.div`
  color: #ffffff;
  font-size: 14px;
`;
const NavbarDivider = styled.div`
  width: 1px;
  height: 16px;
  background-color: #ffffff;
`;

const Navbar = () => {
  return (
    <NavbarWrap>
      <NavbarOnOffMenuBtn />
      <NavbarLogoWrap>
        <NavbarLogo src={navbarLogo} />
      </NavbarLogoWrap>
      <NavbarMenuWrap>
        <NavbarMenu>A 가공업체</NavbarMenu>
        <NavbarDivider></NavbarDivider>
        <NavbarMenu>로그아웃</NavbarMenu>
      </NavbarMenuWrap>
    </NavbarWrap>
  );
};
export default Navbar;
