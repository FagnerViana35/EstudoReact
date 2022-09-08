import React from 'react';

const Cumprimento = () => {
    const cumprimento = () => {
        const hora = new Date().getHours()//Mostra a hora
        if(hora >= 0 && hora <13){
            return <p>Bom Dia</p>
        }else if(hora >= 13 && hora < 18){
            return<p>Boa Tarde</p>
        }else{
            return<p>Boa noite</p>
        }
    }

    return(
        <>
            {cumprimento()}
        </>
        
    )
}
export default Cumprimento;