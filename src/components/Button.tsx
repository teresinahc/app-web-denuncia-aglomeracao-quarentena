import styled from 'styled-components'

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: -6px -6px 11px #ffffff, 6px 6px 11px #d3d3d3;
  border-radius: 15px;
  border: none;

  width: 90%;
  padding: 10px;
  margin-top: 10px;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`

export default Button
