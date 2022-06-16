import styled from "styled-components";

export const ModalOut = styled.div`
height: 100%;
width: 80%;
margin: auto;
background-color:rgba(4, 9, 17, .7);

position: fixed;

top: 0;
left: 0;
right: 0;
bottom: 0;

opacity: 0;
visibility: hidden;

display: flex;
align-items: center;
justify-content: center;

&.open{
    opacity: 1;
    visibility: visible;
}
`

export const ModalBox = styled.div`
width: 900px;
height: 500px;
background-color: #FFF;

border-radius: 0.8rem;

position: relative;

.closemodal{
    position: absolute;

    min-height: 1rem;
    width: 1rem;

    right: 1rem;
    top: 1rem;

    border-radius: 0.2rem;

    cursor: pointer;

    &:hover{
        background-color:#918E89;
    }
}
main{
        padding: 1rem;
    label{
        font-size: 1.6rem;
    }
    .autor{
        height: 2.4rem;
        width: 90%;
        margin-block: 1rem;
        padding-left: 1rem;

        border: 1px solid #918E89 ;
    }
    .frase{
        min-height: 14rem;
        width: 90%;
        margin-block: 1rem;
        padding: 1rem 1rem;


        border: 1px solid #918E89 ;

        resize: none;
    }
}
h1{
    margin-bottom: 2rem;
    font-size: 2rem;
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
    color: #42413E;
    line-height: 0;
    margin-top: 1rem;
}
button.salvar{
        height: 2.4rem ;
        width: 5.4rem;

        border: 1px solid #918E89 ;

        position: absolute;
        left: 1rem;
        bottom: 1rem;
        
        &:hover{
        background-color:#918E89;   
        }
    }

`