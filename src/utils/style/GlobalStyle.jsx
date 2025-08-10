import { createGlobalStyle } from 'styled-components';

const StyledGlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0px;
    box-sizing: border-box;
    font-family: Comfortaa;
  }
  *:focus{
    outline: none
  }
  body{
    // padding-top: 80px;
  }
`;
function GlobalStyle(){
  return <StyledGlobalStyle/>
}

export default GlobalStyle;