import { useState } from 'react';
import  {Container}  from './style';

interface HeaderProps {
    handleOpenModal:()  => void;
    search: (x: string) => void;
}

export function Header({handleOpenModal, search}: HeaderProps  ){
  
   


    return(
        <Container>
        <div className="content">
            <header>
            <h1>IFrases</h1>
            <button className='handleButton' onClick={handleOpenModal}>Nova Frase</button>
            </header>

            <div>

            <input 
            type="text"
            onChange={event => { 
                const x = event.target.value
                search(x);
            }}

    

            placeholder='Pesquisar pelo autor'
            />


            </div>
        </div>
        </Container>
    );
}