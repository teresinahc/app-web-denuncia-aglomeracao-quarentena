import styled, { css } from 'styled-components'

export const ModalBox = styled.div`
  background: #f8f8f8;
  box-shadow: 3px 4px 35px rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  width: 85%;
  min-height: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;

  h2 {
    margin-bottom: 6px;
    width: 90%;
    font-weight: normal;
    color: ${(props) => props.theme.colors.primary};
  }

  hr {
    width: 90%;
    border: solid 0.5px #d6d6d6;
    margin: 10px 0;
  }
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
