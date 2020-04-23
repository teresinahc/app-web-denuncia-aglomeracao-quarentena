import styled from 'styled-components'

export const Box = styled.div`
  background: #f8f8f8;
  box-shadow: -4px -4px 7px #ffffff, 4px 4px 9px rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  padding: 10px;
  margin-top: 5px;
  margin-bottom: 20px;

  p {
    margin: 5px;
    font-size: 15px;
    font-weight: bold;
  }

  span {
    font-weight: normal;
  }
`

export const Hora = styled.p`
  color: rgba(0, 0, 0, 0.28);
  font-weight: normal !important;
`
