import styled from 'styled-components'

export const Curtain = styled.div`
  height: 27px;
  width: 100vw;

  background: ${(props) => props.theme.colors.primary};

  position: fixed;
  top: 0;
`
