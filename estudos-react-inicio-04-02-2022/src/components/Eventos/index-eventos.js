import React, {useState} from 'react';
import EventoLampada from './evento-lampada';

const Lampada = () => {
    const [ligado, setLigado] = useState(false)

    const cancelar = (event) => {
        event.preventDefault()//Cancelar o evento
        return false;
    }
    return (
    <>
        <EventoLampada ligado={ligado}setLigado={setLigado}/>
        <a
            href='http://www.google.com.br'//Cancela o evento
            target='_blank'
            onClick={(event) => cancelar(event)}
        >Link </a>
    </>    
    )
}
export default Lampada;