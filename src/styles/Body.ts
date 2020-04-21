import styled from 'styled-components'

export const Body = styled.div`
  font-family: 'Roboto';

  background: #f8f8f8;
  background-image: url('./images/nuvem.png');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center 80%;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;
  height: calc(100vh - 90px);

  margin-bottom: 64px;
  margin-top: 25px;
`

export const Red = styled.b`
  color: #ef3535;
`
