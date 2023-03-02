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

  ::-webkit-scrollbar {
    visibility: hidden;
    width: 0px;
  }

  @keyframes enter-page-animation {
    0% {
      transform: scale(0%);
    }
    100% {
      transform: scale(100%);
    }
  }

  @keyframes out-page-animation {
    0% {
      transform: scale(100%);
    }
    100% {
      transform: scale(0%);
    }
  }

  @keyframes list-card-on-hover {
    0% {
      opacity: 25%;
    }
    100% {
      opacity: 100%;
    }
  }

  @keyframes list-card-out-hover {
    0% {
      opacity: 100%;
    }
    100% {
      opacity: 25%;
    }
  }
`
