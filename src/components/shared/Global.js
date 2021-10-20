import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after  {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    background-color: ${({ theme }) => theme.colors.paleBlue}
  }

  body {
    font-size: 16px;
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 500;
  }
`;

export default GlobalStyles;
