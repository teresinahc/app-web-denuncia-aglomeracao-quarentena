import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.background};
    font-family: "Roboto", sans-serif;
  }

  #root {
    width: 100vw;
    height: 100vh;
  }
`
