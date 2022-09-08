import React from 'react';

const Relogio = () => {

    return(
        <>
            <h1>Como renderizar uma pagina em react</h1>
            <h2>Relogio</h2>
            {new Date().toLocaleTimeString()} 
        </>//Retorna a hora em formato de texto
    )
}
export default Relogio;