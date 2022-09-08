import React, { useState } from 'react';

const MostraEsconde = () =>{
    const [show, setShow] = useState(false);

    const togle = () =>{
        setShow(!show);
    }

    return(
        <>
        <button type='button' onClick={togle}>
         {show ? 'Esconde' : 'Mostrar'}   
        </button>
            {show && (<h1>Texto</h1>)}      
        </>
    )
}

export default MostraEsconde;