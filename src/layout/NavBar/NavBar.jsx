import React from "react";
import styled from "styled-components";
import LogoImg from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = styled.div`
  background-color: #323949;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
  font-size: 25px;
  color: #fff;
  font-weight: bold;
  margin-left: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    width: 80px;
    height: auto;
  }
`;

function NavBar() {
  const navigate = useNavigate();
  return (
    <Navbar>
      <Logo onClick={() => navigate("/")}>
        <img src={LogoImg} alt="logo" />
        <span>Valorant</span>
      </Logo>
    </Navbar>
  );
}

export default NavBar;
