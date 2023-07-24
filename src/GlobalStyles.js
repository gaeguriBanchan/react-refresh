import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    /* color: white; */
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
