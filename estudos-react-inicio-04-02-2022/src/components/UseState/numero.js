import React from 'react';

const Numero = (props) => {
    return(
    <>
        <p>O valor do setNum mandado pelo num é: {props.num}</p>
        <button onClick={() =>{props.setNum(props.num+10)}}>Botão soma 10</button>
    </>
    )

}
export default Numero;

// {/* <>
//             <p>Teste com o numero em num {props.num}</p>
//             <button onClick={() =>{props.setNum(props.num + 10)}}>Trocar Valor de n1</button>
//         </> */}