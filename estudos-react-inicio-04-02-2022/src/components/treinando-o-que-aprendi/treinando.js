import React from 'react';

const Treinamento = (props) => {

    
    return(
        <>
        <label>Input:</label>
        <input type='text' value={props.tudo}></input>
            <button onClick={() => props.setTudo(props.tudo +2) }>Click</button>
            <p>{props.tudo}</p>
            {console.log(props.tudo)}
        </>
        

    )
}  
export default Treinamento