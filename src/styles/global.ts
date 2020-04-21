import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.background};
    font-family: "Roboto", sans-serif;
  }
`
