import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body {
    min-height: 100%;
    background-color: #fff;
  }
  body {
    font: 400 14px/24px Roboto,Noto Sans,Noto Sans JP,Noto Sans KR,Noto Naskh Arabic,Noto Sans Thai,Noto Sans Hebrew,Noto Sans Bengali,sans-serif;
    color: #616161;
    -webkit-font-smoothing: antialiased !important;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`;