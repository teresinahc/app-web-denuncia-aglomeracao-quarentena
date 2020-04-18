import styled from "styled-components";

type Props = {
  secondary?: boolean;
};

// TODO: hover, focus and active styles
export const ActionButton = styled.button<Props>`
  border-radius: 50%;
  width: 56px;
  height: 56px;

  color: white;

  border: none;
  box-shadow: -6px -6px 11px #ffffff, 6px 6px 11px #d3d3d3;

  background-color: ${(props) =>
    props.secondary
      ? props.theme.colors.secondary
      : props.theme.colors.primary};

  &:focus {
    outline: none;
  }
`;
