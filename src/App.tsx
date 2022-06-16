import {useEffect, useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header/index';
import { Modal } from './components/Modal/index';
import {Container, GlobalStyle} from './Global/styles';
import { api } from './services/api';

interface Listas {
  id:number;
  autor:string;
  text: string;
};

interface createFraseProps{
autor: string;
frase: string;
}



export function App() {

  const [listas, setListas] = useState<Listas[]>([]);

  const [autor, setAutor] = useState('');
  

  useEffect(() => {
    api.get('/listas').then(response => setListas(response.data.lista));
  }, []);

  const [state, setState] = useState('close');

  function handleOpenModal(){
    setState('open');
  }
  function handleCloseModal(){
    setState('close')
  }
  function handleCrateFrase({autor, frase}: createFraseProps){

  if(autor.length === 0 || frase.length === 0){
    alert('Prencha todos os campos');
  }else{
    setState('close')

   const ids = listas.map(lista => lista.id);
   const ultimoid = ids[ids.length - 1];
   console.log(ultimoid);

    const data = {
    id: Number(ultimoid) + 1,
    autor: autor,
    text: frase
    }

    setListas([...listas, data]);
  }
  }

  function search(x: string){
    setAutor(x);
  }

  return (
  <>
  <Container>
  <Header handleOpenModal={handleOpenModal} search={search} />


  <Dashboard Lista={listas} Autor={autor} />

  <Modal 
  state={state} 
  handleCloseModal={handleCloseModal}
  handleCrateFrase={handleCrateFrase}
  />

  <GlobalStyle/>
  </Container>
  </>
  );
}


