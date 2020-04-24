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

  #root {
    width: 100vw;
    height: 100vh;

    overflow-y: hidden;
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #0000004a;
    border: 0px none #ffffff;
    border-radius: 100px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #0000004a;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #ff2626;
  }
  ::-webkit-scrollbar-track {
    background: #dcdcdc;
    border: 0px none #ffffff;
    border-radius: 100px;
  }
  ::-webkit-scrollbar-track:hover {
    background: #dcdcdc;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }
`
