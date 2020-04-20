import React from "react";
import styled from "styled-components";
import menubars from "./images/menubars.png";

type Props = {
  title: string;
};

const NavBar: React.FC<Props> = ({ title }) => {
  return (
    <AppBar>
      <MenuBars src={menubars} alt="Menu" />
      <h3>{title}</h3>
    </AppBar>
  );
};

export default NavBar;

const AppBar = styled.div`
  width: 100%;
  height: 64px;
  background-color: #ef3535;
  display: flex;
  align-items: center;
  box-shadow: -9px -9px 25px #ffffff, 9px 9px 17px #d3d3d3;
  border-radius: 0px 0px 15px 15px;
  margin-bottom: 20px;

  h3 {
    color: white;
    font-family: "Roboto";
    font-weight: normal;
    font-size: 23px;
  }
`;

const MenuBars = styled.img`
  width: 36px;
  height: 23px;
  margin: 0 15px;
  cursor: pointer;
`;
