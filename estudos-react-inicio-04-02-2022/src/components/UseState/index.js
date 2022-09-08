import React, { useState } from 'react';
import Numero from './numero';

const UseStateTeste = () => {
    const[num, setNum] = useState(0)


    return(
        <>
        <p>O numero de num é: {num}</p>
        <Numero
            num={num}
            setNum={setNum}
        />
        </>
        
    )
}



export default UseStateTeste;
//O que é State e como usar State em React - Curso de React - Aula 10
// {/* <p>O numero do setNum é {num}</p>
// <Numero num={num} setNum={setNum} /> */}