import React from "react";
import logoImg from "../images/to-do-list.svg";
import styled from "styled-components";

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: rgb(23, 14, 9, 0.7);
  color: white;
`;

const ImgLogo = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

const Navbar = () => {
  return (
    <NavBarStyled>
      <ImgLogo src={logoImg} alt="logo" />
    </NavBarStyled>
  );
};

export default Navbar;
