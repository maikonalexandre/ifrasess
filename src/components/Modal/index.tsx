import { useState } from "react";
import { ModalBox, ModalOut } from "./Styles";

interface createFraseProps{
    autor: string;
    frase: string;
    }

interface ModalProps {
    state: string; 
    handleCloseModal: () => void;
    handleCrateFrase: ({autor, frase}:createFraseProps) => void;
}

export function Modal({state, handleCloseModal, handleCrateFrase}:ModalProps){

    const [autor, setAutor] = useState('');
    const [frase, setFrase] = useState('');

    function onhandleCrateFrase(){
        handleCrateFrase({autor, frase});
        setAutor('');
        setFrase('');
    }


    return(
        <ModalOut className={state}>
            <ModalBox>
                <main>
                <h1>Nova frase:</h1>

                <label htmlFor="" >Autor</label>
                <br />

                <input className="autor" value={autor} type="text" 
                onChange={event => setAutor(event.target.value) }
                 />

                <br />


                <label htmlFor="">Frase</label>
                <br />
                <textarea className="frase" value={frase} onChange={event => setFrase(event.target.value)}/>
                </main>

                <button onClick={onhandleCrateFrase} className="salvar">Salvar</button>
                <button className="closemodal" onClick={handleCloseModal}>x</button>
            </ModalBox>
        </ModalOut>
    )
}