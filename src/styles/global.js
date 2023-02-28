import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Avenir Next';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @font-face {
  font-family: 'Avenir Next';
  src: url('../public/fonts/AvenirNext-Regular.otf');
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url('../public/fonts/AvenirNext-Medium.ttf');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url('../public/fonts/AvenirNext-Bold.otf');
    font-weight: bold;
  }

  @font-face {
    font-family: 'Avenir Next';
    src: url('../public/fonts/AvenirNext-It.otf');
    font-style: italic;
  }

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
  h1 {
  font-size: 36px;
  font-weight: bold;
  line-height: 22px;
  color: black;
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
    line-height: 22px;
    color: black;
  }

  h3 {
    font-size: 16px;
    font-weight: 500;
    color: black;
    margin: 0px;
    padding: 0px;
  }

  ::-webkit-scrollbar {
    visibility: hidden;
    width: 0px;
  }

  #enter-page-animation {
    animation: enter-page 0.5s forwards;
  }

  #out-page-animation {
    animation: out-page 0.5s forwards;
  }

  @keyframes enter-page {
    0% {
      transform: scale(0%);
    }
    100% {
      transform: scale(100%);
    }
  }

  @keyframes out-page {
    0% {
      transform: scale(100%);
    }
    100% {
      transform: scale(0%);
    }
  }
`