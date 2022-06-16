import styled from "styled-components";

export const Container = styled.div`
width: 80%;
background: #C2BDB6 ;
margin: 0 auto;

.content{
padding: 2.4rem;

    h1{
    margin-bottom: 2rem;
    font-size: 2.4rem;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
    color: #42413E;
    }
    input{
    height: 2.4rem;
    width: calc(100% - 0rem);
    font-family: 'Courier New', Courier, monospace;
    padding-left: 1rem;
    }
    button{
        width: 2.4rem;
        height: 2.4rem;
       
        &:hover{
            background-color: #918E89;
        }
    }
    div{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    header{
        display: flex;
        justify-content: space-between;

        button{
            height: 2.4rem ;
            width: 5.4rem;
        }
    }

}
`