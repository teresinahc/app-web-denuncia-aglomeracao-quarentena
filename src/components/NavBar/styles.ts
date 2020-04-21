import styled from 'styled-components'

export const AppBar = styled.div`
  width: 100%;
  height: 64px;
  position: fixed;
  bottom: 0;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 15px 15px 0 0;
  box-shadow: 0px -1px 19px rgba(255, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: space-around;

  h3 {
    color: white;
    font-family: 'Roboto';
    font-weight: normal;
    font-size: 23px;
  }
`

export const NavButton = styled.button`
  background-color: #d13030;
  box-shadow: -4px -4px 9px rgba(255, 255, 255, 0.2),
    4px 4px 9px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  border: none;
  cursor: pointer;

  width: 40px;
  height: 40px;

  color: white;
  font-size: 20px;

  &:focus {
    outline: none;
  }
`
export const AddButton = styled.button`
  border-radius: 50%;
  border: none;
  cursor: pointer;

  width: 40px;
  height: 40px;

  color: white;
  font-size: 20px;

  background: linear-gradient(320.19deg, #ddb218 14.02%, #ffd41d 84.82%);
  box-shadow: -4px -4px 9px rgba(255, 255, 255, 0.2),
    4px 4px 9px rgba(0, 0, 0, 0.2);

  &:focus {
    outline: none;
  }
`
