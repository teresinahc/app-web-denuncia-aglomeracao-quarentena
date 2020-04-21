import styled, { css } from 'styled-components'

type CurtainProps = {
  state: boolean
}
export const Curtain = styled.div<CurtainProps>`
  height: 295px;
  width: 100vw;
  transition: 0.5s;
  background: ${(props) => props.theme.colors.primary};

  position: absolute;
  top: -265px;

  border-radius: 0 0 15px 15px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    color: white;
    font-weight: normal;
    margin-bottom: 10px;
    margin-top: -25px;
  }

  ${(props) =>
    props.state &&
    css`
      top: 0;
    `}
`
export const DownButton = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;

  width: 34px;
  height: 34px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 270px;
  transition: 1s;
`

export const DisplayStats = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`

export const Stats = styled.div`
  height: 80px;
  width: 170px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: white;
  background: linear-gradient(113.6deg, #bc2b2b 5.28%, #e03333 92.96%);
  box-shadow: -4px -4px 9px rgba(255, 255, 255, 0.2),
    4px 4px 9px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
`

export const Title = styled.p`
  width: 85%;
  font-size: 16px;
`

export const Details = styled.p`
  font-size: 15px;
  color: rgba(255, 255, 255, 0.4);
  width: 85%;
`

export const Info = styled.p`
  font-size: 23px;
  font-weight: bold;
  text-align: center;
`
