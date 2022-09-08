import React, { useState } from 'react';
import Cumprimento from './cumprimento';
const RenderizarComponent = () => {
const [log, setLog]= useState()
    return(
        <>
        <Cumprimento/>
        </>
        
    )
}
export default RenderizarComponent;
//Como usar o recurso de Renderização condicional em React