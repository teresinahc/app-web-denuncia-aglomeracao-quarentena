import styled from 'styled-components'

type Props = {
  secondary?: boolean
}

// TODO: hover, focus and active styles
const FAB = styled.button<Props>`
  border-radius: 50%;
  width: 56px;
  height: 56px;
  position: absolute;
  z-index: 10000;
  bottom: 50px;
  right: 50px;

  cursor: pointer;
  color: white;

  border: none;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${(props) =>
    props.secondary
      ? props.theme.colors.secondary
      : props.theme.colors.primary};

  &:focus {
    outline: none;
  }
`
export default FAB
