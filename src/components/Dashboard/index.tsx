import { Container } from "./style";

interface Listas {
    id:number;
    autor:string;
    text: string;
}
interface  DasboardProps {
   Lista: Listas[];
   Autor: string;
}

export function Dashboard({Lista, Autor}: DasboardProps){

    console.log('lista', Lista);
    console.log('autor', Autor);

    const listafiltrada = Lista.filter(list => (list.autor.toLowerCase()).startsWith(Autor.toLowerCase()));

    return(
        <Container>
            <div className="content">

           {listafiltrada.map(lista => {
    return(
        <div className="fraseBox" key={lista.id}>
            <p>{lista.text}</p>
            <br/>
            <p>{lista.autor}</p>
        </div>
    )
})
}

            </div>
        </Container>
    )
};