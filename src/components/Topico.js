import styled from "styled-components";

export const Topico = styled.h2`
  width: 85%;
  color: black;

  font-family: "Roboto";
  font-weight: 500;
  font-size: 16px;

  margin-left: 20px;
  margin-bottom: 0;
  margin-top: 0;

  letter-spacing: 1.25px;

  &::before {
    content: "";
    background: #ef3535;

    height: 20px;
    width: 20px;
    border-radius: 50%;
    position: absolute;
    left: 20px;
  }
`;
