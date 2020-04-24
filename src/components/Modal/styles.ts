import styled, { css } from 'styled-components'

export const ModalBox = styled.div`
  background: #f8f8f8;
  box-shadow: 3px 4px 35px rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  width: 85%;
  min-height: 200px;
`

export const Container = styled.div`
  transition: 0.5s;
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(7, 7, 7, 0.6);

  ${(props) =>
    props.hidden &&
    css`
      opacity: 0;
      pointer-events: none;
    `}
`
