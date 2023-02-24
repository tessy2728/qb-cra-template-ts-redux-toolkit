import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    color: ${p => p.theme.text};
    background-color: ${p => p.theme.background};
    text-align: center;
  }
  .text-left {
    text-align: left;
  }
  
  .App-logo {
    height: 30px;
    pointer-events: none;
  }
  
  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }
  .container {
    margin: 0 auto;
    max-width: 1440px;
  }
  .App-header {
    background-color: #282c34;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: calc(10px + 2vmin);
    color: white;
  }
  .App-title {
    display: flex;
    align-items: center;
    justify-content: left;
  }
  
  .App-link {
    color: #61dafb;
  }
  
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .error {
    color:red;
    font-size: 14px;
  }
  
  .grid {
    display:grid;
    grid-gap: 1rem;
  }
  
  .grid-cols-3 {
    grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  }
  
  .flex {
    display:flex;
  } 
  
  .flex-column {
    flex-direction: column;
  }
  .align-center {
    align-items:center;
  }
`;

export default {
  GlobalStyle,
};
