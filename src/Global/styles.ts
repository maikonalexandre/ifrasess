import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
}
body{
    font-size: 62.5%;
    font-family: 'Courier New', Courier, monospace;
}
h1, p {
    font-size: 1.6rem;
}
header{
    
}
`
export const Container = styled.div`
width: 80%;
height: 100%;
background: #C2BDB6 ;
margin: 0 auto;
`