import styled from "styled-components";

export const Container = styled.div`
width: 80%;
min-height: 100vh;
background: #C2BDB6 ;
margin: 0 auto;
padding-bottom: 2.4rem;

.content{
padding: 0 2.4rem;

.fraseBox{
    width: 100%;
    min-height: 8rem;
    margin-bottom: 2rem;
    padding: 1.4rem;
    text-align: justify;
    resize: none;

    outline: none;

    font-family: 'Courier New', Courier, monospace;
    font-size: 1rem;
    background-color: #FFF;
}
button{
    height: 2.4rem;
    width: 6rem;

    &:hover{
        background-color: #918E89;
    }
}
}
`