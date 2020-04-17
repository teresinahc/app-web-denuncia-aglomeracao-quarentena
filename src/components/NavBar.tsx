import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

type Props = {
  title: string;
};

// TODO: make a drawer
const NavBar: React.FC<Props> = ({ title }) => {
  return (
    <AppBar>
      <FontAwesomeIcon icon={faBars} />
      <h3>{title}</h3>
    </AppBar>
  );
};

export default NavBar;

const AppBar = styled.div`
  width: 100%;
  background-color: #ef3535;
  display: flex;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 20px;

  h3 {
    color: white;
    font-family: "Roboto";
    font-weight: normal;
  }

  button {
    margin-left: 5px;
    color: white;
  }
`;

const Image = styled.img`
  margin: 0 18%;
  align-self: center;
  justify-self: center;
`;

const Title = styled.h1`
  font-family: "Maven Pro";
  position: absolute;

  font-size: 40px;
  color: rgba(255, 0, 0, 0.06);
  filter: blur(2px);

  top: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;
